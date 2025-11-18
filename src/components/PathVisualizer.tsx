import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface PathNode {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
}

const nodes: PathNode[] = [
  {
    id: 1,
    title: "Problema",
    description: "Encontrar clientes qualificados",
    x: 10,
    y: 50,
  },
  {
    id: 2,
    title: "Busca IA",
    description: "Análise automática de estabelecimentos",
    x: 30,
    y: 30,
  },
  {
    id: 3,
    title: "Copy IA",
    description: "Textos persuasivos gerados",
    x: 50,
    y: 50,
  },
  {
    id: 4,
    title: "Contrato",
    description: "Geração automática de contratos",
    x: 70,
    y: 30,
  },
  {
    id: 5,
    title: "Workflow",
    description: "Organização inteligente Kanban",
    x: 85,
    y: 50,
  },
  {
    id: 6,
    title: "Conversão",
    description: "Fechamento com alta taxa de sucesso",
    x: 95,
    y: 70,
  },
];

export const PathVisualizer = () => {
  const [activeNode, setActiveNode] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
              Path Visualizer IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como a IA Genesis transforma seu processo de vendas em uma jornada inteligente e automatizada
          </p>
        </div>

        <div className="relative w-full h-[600px] md:h-[400px] rounded-2xl bg-card/50 border border-border backdrop-blur-sm overflow-hidden">
          {/* SVG for connections */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(270, 95%, 65%)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(280, 100%, 70%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(270, 95%, 65%)" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Draw lines between nodes */}
            {nodes.map((node, index) => {
              if (index === nodes.length - 1) return null;
              const nextNode = nodes[index + 1];
              const isActive = index < activeNode;

              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: activeNode >= index ? 1 : 0.8,
                opacity: activeNode >= index ? 1 : 0.5,
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`relative group cursor-pointer ${
                  activeNode === index ? "animate-pulse-neon" : ""
                }`}
              >
                {/* Node circle */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-xl transition-all duration-300 ${
                    activeNode >= index
                      ? "bg-primary text-primary-foreground shadow-neon-strong"
                      : "bg-secondary text-muted-foreground border-2 border-border"
                  }`}
                >
                  {node.id}
                </div>

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-card border border-primary/30 rounded-lg p-3 shadow-neon backdrop-blur-sm">
                    <h3 className="font-bold text-sm text-foreground mb-1">{node.title}</h3>
                    <p className="text-xs text-muted-foreground">{node.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nodes.map((node, index) => (
            <motion.div
              key={`legend-${node.id}`}
              className={`p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                activeNode >= index
                  ? "bg-card border-primary/50 shadow-neon"
                  : "bg-card/30 border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    activeNode >= index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {node.id}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{node.title}</h4>
                  <p className="text-sm text-muted-foreground">{node.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

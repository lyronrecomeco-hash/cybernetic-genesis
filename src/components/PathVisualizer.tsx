import { motion } from 'framer-motion';

const nodes = [
  'Encontrar clientes',
  'Analisar estabelecimentos',
  'Gerar copy persuasiva',
  'Criar contrato automático',
  'Workflow inteligente',
  'Fechamento com alta conversão'
];

const PathVisualizer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-20">
      <div className="relative">
        {/* Lines */}
        {nodes.slice(0, -1).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-purple-500/50"
            style={{ width: '100%', top: `${i * 100}px`, left: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node}
            className="absolute w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-300"
            style={{ top: `${i * 100}px`, left: '50%', transform: 'translateX(-50%)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <span className="text-xs font-medium">{i + 1}</span>
          </motion.div>
        ))}

        {/* Labels */}
        {nodes.map((node, i) => (
          <motion.div
            key={node}
            className="absolute text-purple-300"
            style={{ top: `${i * 100 + 40}px`, left: '50%', transform: 'translateX(-50%)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 + 0.3 }}
          >
            <span className="text-sm font-medium">{node}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PathVisualizer;
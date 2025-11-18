import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-neon-primary/10 rounded-full blur-3xl animate-float top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-neon-glow/10 rounded-full blur-3xl animate-float top-40 right-20 animation-delay-2000" />
        <div className="absolute w-96 h-96 bg-neon-bright/10 rounded-full blur-3xl animate-float bottom-20 left-1/3 animation-delay-4000" />
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(270_30%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_30%_20%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/30 backdrop-blur-sm shadow-neon">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-neon" />
            <span className="text-sm font-medium text-foreground">A Revolução da Prospecção</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="block text-foreground mb-2">Prospecção com</span>
            <span className="block bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent animate-glow pb-2 leading-tight">
              Inteligência Artificial
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A plataforma mais poderosa para vendedores de sites e serviços digitais.
            <span className="block mt-2 text-foreground font-semibold">
              Encontre clientes. Converta mais. Venda melhor.
            </span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={onCTAClick}
              size="lg"
              className="group relative px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-strong hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse-neon" />
              Ativar Agora
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-neon-glow/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-neon" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              A evolução do vendedor digital começou.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 max-w-4xl mx-auto">
            {[
              { value: "10x", label: "Mais Rápido" },
              { value: "95%", label: "Conversão" },
              { value: "24/7", label: "Automação" },
              { value: "∞", label: "Possibilidades" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-neon"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

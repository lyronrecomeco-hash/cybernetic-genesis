import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

interface CTASectionProps {
  onCTAClick: () => void;
}

export const CTASection = ({ onCTAClick }: CTASectionProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(270_95%_65%/0.1),transparent_70%)]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-card border-2 border-primary/30 backdrop-blur-sm shadow-neon-strong">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center mb-4">
              <Rocket className="w-10 h-10 text-primary animate-float" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block text-foreground mb-2">Pronto para</span>
              <span className="block bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
                Revolucionar suas Vendas?
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se aos vendedores que estão transformando prospecção em ciência exata com IA Genesis
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {["Setup Zero", "IA Integrada", "Suporte 24/7", "Resultados Garantidos"].map((benefit) => (
                <div
                  key={benefit}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 text-sm font-medium text-foreground backdrop-blur-sm"
                >
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                onClick={onCTAClick}
                size="lg"
                className="group relative px-10 py-7 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-strong hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  Ativar Agora
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-neon-glow/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-neon" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                A evolução do vendedor digital começou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

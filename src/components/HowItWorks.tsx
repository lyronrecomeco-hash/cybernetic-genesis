import { Search, Brain, FileText, FileSignature, Kanban, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Buscar Clientes",
    description: "Defina sua região e critérios. A IA busca estabelecimentos qualificados em múltiplas plataformas.",
  },
  {
    icon: Brain,
    number: "02",
    title: "IA Analisa",
    description: "Análise automática completa: dados, probabilidade de conversão e insights estratégicos.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Copy Persuasiva",
    description: "IA gera textos profissionais personalizados para cada prospect identificado.",
  },
  {
    icon: FileSignature,
    number: "04",
    title: "Criar Contrato",
    description: "Contrato profissional gerado automaticamente em 1 clique, pronto para enviar.",
  },
  {
    icon: Kanban,
    number: "05",
    title: "Workflow Kanban",
    description: "Organize todo funil de vendas visualmente com cards, etapas e automações.",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Fechar Vendas",
    description: "Acompanhe métricas, otimize processos e feche mais negócios com inteligência.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Como </span>
            <span className="bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do primeiro contato ao fechamento: processo inteligente e automatizado
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting steps - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-neon-glow/50 to-primary/50" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="inline-block p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group">
                      <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                          <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot - desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary shadow-neon-strong animate-pulse-neon z-10" />

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-xl text-foreground font-semibold mb-4">
            Simplifique. Automatize. Converta.
          </p>
          <p className="text-muted-foreground">
            Cada etapa foi projetada para maximizar sua eficiência e resultados
          </p>
        </div>
      </div>
    </section>
  );
};

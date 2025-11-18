import { Brain, Target, Zap, TrendingUp, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Conversacional",
    description: "Assistente inteligente que entende seu negócio e gera estratégias personalizadas de prospecção.",
  },
  {
    icon: Target,
    title: "Busca Avançada",
    description: "Google Places, TomTom e Geoapify integrados para encontrar os clientes perfeitos na sua região.",
  },
  {
    icon: FileText,
    title: "Copy Persuasiva",
    description: "IA gera textos profissionais e persuasivos que convertem, economizando horas de trabalho.",
  },
  {
    icon: Zap,
    title: "Contratos Automáticos",
    description: "Crie contratos profissionais em 1 clique com IA, adaptados para cada cliente específico.",
  },
  {
    icon: TrendingUp,
    title: "Análise Preditiva",
    description: "Probabilidade de conversão calculada por IA para priorizar os melhores prospects.",
  },
  {
    icon: BarChart3,
    title: "Workflow Kanban",
    description: "Organize toda operação de vendas com sistema visual inteligente e métricas em tempo real.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">O que é a </span>
            <span className="bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
              IA Genesis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A plataforma completa de prospecção que combina busca inteligente, análise preditiva, 
            geração de conteúdo persuasivo e automação total do seu workflow de vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:animate-pulse-neon" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-primary/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Por que vendedores escolhem IA Genesis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Aumentar conversões em até 10x",
              "Acelerar prospecção com IA",
              "Identificar melhores clientes automaticamente",
              "Criar copies profissionais instantaneamente",
              "Automatizar contratos e propostas",
              "Organizar workflow com inteligência",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

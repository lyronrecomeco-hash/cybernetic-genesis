import { CheckCircle2, Shield, Workflow, Bell, Database, FileCheck } from "lucide-react";

const differentials = [
  {
    icon: Database,
    title: "Busca Multi-Plataforma",
    description: "Google Places, TomTom e Geoapify integrados em uma única interface poderosa.",
  },
  {
    icon: Shield,
    title: "Análise de Probabilidade",
    description: "IA calcula a chance de conversão de cada prospect para maximizar seu ROI.",
  },
  {
    icon: FileCheck,
    title: "Contratos Inteligentes",
    description: "Geração automática de contratos personalizados com IA avançada.",
  },
  {
    icon: Workflow,
    title: "Workflow Kanban Completo",
    description: "Organize, acompanhe e otimize cada etapa do seu funil de vendas.",
  },
  {
    icon: Bell,
    title: "Sistema de Notificações",
    description: "Alertas inteligentes para nunca perder oportunidades importantes.",
  },
  {
    icon: CheckCircle2,
    title: "Checkpoint e Auditoria",
    description: "Logs completos de todas ações para controle total e rastreabilidade.",
  },
];

export const Differentials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Diferenciais </span>
            <span className="bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
              Únicos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos profissionais que fazem da IA Genesis a escolha definitiva para vendedores sérios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-neon-bright rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{differential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional features list */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Métricas de performance em tempo real",
            "Sistema de tickets integrado",
            "Automação de follow-ups",
            "Dashboard analítico completo",
            "Histórico completo de interações",
            "Exportação de dados e relatórios",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

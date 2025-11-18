import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

interface AccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AccessDialog = ({ open, onOpenChange }: AccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/50 shadow-neon-strong backdrop-blur-xl">
        <DialogHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center animate-pulse-neon">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onOpenChange(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-neon-glow to-neon-bright bg-clip-text text-transparent">
            Acesso Antecipado
          </DialogTitle>
          
          <DialogDescription className="text-lg text-muted-foreground pt-4 space-y-4">
            <p className="leading-relaxed">
              A plataforma <span className="text-foreground font-semibold">IA Genesis</span> está em desenvolvimento 
              e será lançada em breve.
            </p>
            
            <div className="p-4 rounded-lg bg-secondary/50 border border-primary/20">
              <p className="text-foreground font-medium mb-2">O que você terá acesso:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Busca inteligente de clientes com IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Geração automática de copy persuasiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Workflow completo de vendas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Análise preditiva de conversão</span>
                </li>
              </ul>
            </div>

            <p className="text-center pt-2">
              <span className="text-foreground font-semibold">Em breve você poderá ativar sua conta.</span>
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="pt-6">
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon hover:shadow-neon-strong transition-all duration-300"
          >
            Entendi, aguardar lançamento
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

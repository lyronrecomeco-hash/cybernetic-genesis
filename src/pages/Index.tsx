import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Differentials } from "@/components/Differentials";
import { PathVisualizer } from "@/components/PathVisualizer";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { AccessDialog } from "@/components/AccessDialog";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCTAClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Hero onCTAClick={handleCTAClick} />
      <Features />
      <Differentials />
      <PathVisualizer />
      <HowItWorks />
      <CTASection onCTAClick={handleCTAClick} />
      <AccessDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Index;
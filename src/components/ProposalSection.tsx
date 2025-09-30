import { ReactNode } from "react";

interface ProposalSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  backgroundPattern?: boolean;
}

const ProposalSection = ({ 
  title, 
  subtitle, 
  children, 
  className = "", 
  backgroundPattern = false 
}: ProposalSectionProps) => {
  return (
    <section className={`min-h-screen p-8 ${backgroundPattern ? 'bg-gradient-subtle' : 'bg-background'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground font-light">
              {subtitle}
            </p>
          )}
        </div>
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
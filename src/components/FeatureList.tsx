import { CheckCircle } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  highlight?: boolean;
}

interface FeatureListProps {
  features: Feature[];
  columns?: 1 | 2 | 3;
}

const FeatureList = ({ features, columns = 2 }: FeatureListProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`p-6 rounded-lg border transition-all hover:shadow-elevation ${
            feature.highlight 
              ? 'bg-primary/5 border-primary/30 shadow-brand' 
              : 'bg-card border-border shadow-subtle'
          }`}
        >
          <div className="flex items-start gap-4">
            <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
              feature.highlight ? 'text-primary' : 'text-accent'
            }`} />
            <div>
              <h3 className={`font-semibold mb-2 ${
                feature.highlight ? 'text-primary' : 'text-foreground'
              }`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-card rounded-lg p-6 text-center shadow-subtle border hover:shadow-elevation transition-shadow"
        >
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="font-semibold text-foreground mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-sm text-muted-foreground">
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
interface TimelinePhase {
  phase: string;
  title: string;
  duration: string;
  deliverables: string[];
  milestone: string;
}

interface ProposalTimelineProps {
  phases: TimelinePhase[];
}

const ProposalTimeline = ({ phases }: ProposalTimelineProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center text-muted-foreground mb-8">
        <em>[Visual Timeline Diagram Recommended Here]</em>
      </div>
      
      {phases.map((phase, index) => (
        <div key={index} className="relative">
          {/* Timeline connector */}
          {index < phases.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-primary to-primary/30"></div>
          )}
          
          <div className="flex gap-6">
            {/* Phase marker */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
            </div>
            
            {/* Phase content */}
            <div className="flex-1 bg-card rounded-lg shadow-subtle border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{phase.phase}</h3>
                  <h4 className="text-lg font-medium text-foreground">{phase.title}</h4>
                </div>
                <div className="text-right">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Key Deliverables:</h5>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Major Milestone:</h5>
                  <p className="text-muted-foreground">{phase.milestone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProposalTimeline;
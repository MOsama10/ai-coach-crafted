import vionexLogo from "@/assets/vionex-logo.png";

const ProposalCover = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col justify-center items-center text-white p-8">
      <div className="text-center max-w-4xl">
        <img 
          src={vionexLogo} 
          alt="Vionex Logo" 
          className="w-32 h-32 mx-auto mb-8 drop-shadow-lg"
        />
        
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          AI-Powered Fitness Coaching App
        </h1>
        
        <div className="text-2xl font-light mb-12 opacity-90">
          Project Proposal
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div>
              <div className="font-semibold mb-2">Prepared for:</div>
              <div className="opacity-90">[Client Name]</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Prepared by:</div>
              <div className="opacity-90">Vionex Technologies</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Date:</div>
              <div className="opacity-90">{new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Project Value:</div>
              <div className="opacity-90">$150,000 - $250,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalCover;
import React from 'react';

const steps = [
  {
    title: "Design your AI Blueprint",
    description: "Translating your vision, commercial objectives, and operations into an AI implementation roadmap integrating your data, business processes, and in-house expertise.",
    icon: "◎"
  },
  {
    title: "Map the Decision Workflows",
    description: "Identifying bottlenecks and opportunities where AI can unlock speed, value and business impact.",
    icon: "◇"
  },
  {
    title: "Embed AI",
    description: "Augmenting your business: automating the routine tasks, elevating expertise and enabling teams to focus on what drives value.",
    icon: "◈"
  },
  {
    title: "Iterate & Scale",
    description: "Operationalising decision making into integrated Data × AI × Human systems.",
    icon: "⊞"
  }
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight italic">From Data to Intelligence.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/50 via-teal-500/20 to-transparent z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="w-12 h-12 flex items-center justify-center bg-[#050505] border border-white/10 text-2xl text-blue-400 mb-6 group-hover:border-blue-500/50 transition-colors duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">{step.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-lg">
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed italic">
            "Our focus is AI augmentation tailored to YOUR BUSINESS"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
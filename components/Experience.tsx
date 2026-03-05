import React from 'react';

const EvolutionPhase: React.FC<{
  phase: string;
  title: string;
  years: string;
  focus: string;
  achievements: string[];
  companies: string[];
}> = ({ phase, title, years, focus, achievements, companies }) => (
  <div className="relative pl-12 pb-24 border-l border-white/10 group last:border-0">
    <div className="absolute top-0 left-[-6px] w-3 h-3 bg-blue-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
    
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
      <div className="flex-1">
        <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{phase}</span>
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-gray-500 font-medium mb-6 italic">{years} • {companies.join(', ')}</p>
        <p className="text-gray-300 font-light text-lg leading-relaxed mb-8 max-w-2xl">
          {focus}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <div key={i} className="flex items-center space-x-3 text-sm text-gray-400 bg-white/5 p-3 rounded-sm border border-white/5">
              <span className="text-blue-400">▹</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">Evolution</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8"> Journey to Decision Intelligence</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
           A continuous evolution in the strategy, architecture and implementation of analytics solutions and decision systems powered by data, modern tech stack and business expertise.
          </p>
        </div>

        <div className="relative">
          <EvolutionPhase 
            phase="Phase 1"
            title="Analytics Foundations"
            years="Early Career"
            companies={["Interworks", "HelloFresh"]}
            focus="Establishing the primitives of data analytics & BI strategy. Turning data into robust frameworks for reporting and experimentation."
            achievements={[
              "Built complex KPI frameworks",
              "Revenue modeling & forecasting",
              "Experimentation pipeline design",
              "BI Infrastructure deployment"
            ]}
          />
          
          <EvolutionPhase 
            phase="Phase 2"
            title="Scaling Decision Infrastructure"
            years="Growth Era"
            companies={["Lime", "Bridge-U", "Consulting Missions"]}
            focus="Embedding data into the central nervous system of hyper-growth startups. Redesigning organizational processes into reliable decision systems."
            achievements={[
              "Growth & Ops cross-functional analytics",
              "QBR process systemization",
              "Data governance at scale",
              "Embedded analytics architecture"
            ]}
          />

          <EvolutionPhase 
            phase="Phase 3"
            title="AI-Augmented Analytics, Streamlined Data Ops and Governance"
            years="The Intelligent Edge"
            companies={["HeliosX"]}
            focus="Scaling performance through orchestration. Bridging the gap between traditional data stacks and generative intelligence."
            achievements={[
              "Scaled team 4 → 10 / Revenue 6x",
              "Operationalised experimentation",
              "AI reviewed coding",
              "Automation of request intake and LLM integration",
              "Deployment of AI data self service and litterary tooling",
              "AI data governance conformed to EU-AI act & GDPR", 
            ]}
          />
        </div>

        <div className="mt-20 pt-20 border-t border-white/5 text-center">
          <p className="text-gray-400 mb-8 italic">"The next phase is about the autonomous decision layer."</p>
          <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-all">Discuss Your Evolution to Intelligence</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
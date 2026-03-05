import React from 'react';

const FlowIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'vision':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-10.5v.75m0 1.5v.75m0 1.5V15m-9-6h.75m.75 0h.75m.75 0h.75M12 18.75h.008v.008H12v-.008ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    case 'unify':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      );
    case 'insights':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case 'decision':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      );
    default:
      return null;
  }
};

const ServiceCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  description: string; 
  outcomes: string[];
  iconType: string;
  isLast?: boolean;
}> = ({ title, subtitle, description, outcomes, iconType, isLast }) => (
  <div className="relative flex-1 group">
    {/* Flow Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent z-0"></div>
    )}
    
    <div className="p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 bg-[#0a0a0a] flex flex-col h-full relative z-10">
      <div className="mb-6 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
        <FlowIcon type={iconType} />
      </div>
      <h4 className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{subtitle}</h4>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed flex-grow">{description}</p>
      
      <div className="space-y-2 pt-4 border-t border-white/5">
        {outcomes.map((outcome, i) => (
          <div key={i} className="flex items-start space-x-2 text-[11px] text-gray-400 uppercase tracking-wider">
            <span className="text-blue-500">▹</span>
            <span>{outcome}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4 italic"> Journey </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight"> Your Data, Analytics & AI Journey </h3>
          <p className="mt-6 text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
            Our services are designed as a five-step journey to transform your data and business expertise into your most profitable assets. We define the strategy, deploy the foundation, unlock the insights, design decision intelligence frameworks and integrate AI & Automation solutions tailored to your Business"  
          </p>
        </div>

        {/* The Flow Container */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-stretch">
          <ServiceCard 
            iconType="vision"
            subtitle="Stage 01"
            title="Vision & Roadmap"
            description="Align leadership on a prioritized, ROI-driven Data, Analytics & AI strategy that cuts through the noise."
            outcomes={["Strategic Action Plan", "Team Alignment","Prioritized ROI"]}
          />
          <ServiceCard 
            iconType="unify"
            subtitle="Stage 02"
            title="Unify Your Data"
            description="Connect disparate tools into a single and scalable source of truth."
            outcomes={["Automated Data Pipelines","Modern Cloud Stack", "Scalable Infrastructure","A Single Source of Truth"]}
          />
          <ServiceCard 
            iconType="insights"
            subtitle="Stage 03"
            title="Insights to Impact"
            description="Turn performance metrics into ROI-driven actions"
            outcomes={["Executive Dashboards", "Marketing & Sales Analytics","Product Analytics","Operational Efficiency","Customer Segmentation"]}
          />
          <ServiceCard 
            iconType="decision"
            subtitle="Stage 04"
            title="Decision Intelligence"
            description="Design the logic layer for smarter, faster human decisions across your teams."
            outcomes={["Decision Frameworks", "Operationalised Team Workflows","AI Use Case Mapping"]}
          />
          <ServiceCard 
            iconType="ai"
            subtitle="Stage 05"
            title="AI Integration"
            isLast={true}
            description="Operationalise LLMs and autonomous agents directly into your existing data workflows."
            outcomes={["Workflow Automation","LLM Pipelines", "Agent Orchestration","Secure Model Governance"]}
          />
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex flex-col items-center space-y-4">
                <div className="h-12 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase">End-to-end Decision Architecture</p>
                <a 
                  href="#contact" 
                  className="px-10 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-blue-600 hover:text-white transition-all duration-500 rounded-sm shadow-2xl"
                >
                  Deploy your System
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

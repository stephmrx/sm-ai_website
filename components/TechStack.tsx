import React from 'react';

const tools = [
  { name: 'ChatGPT', slug: 'openai' },
  { name: 'Claude', slug: 'anthropic' },
  { name: 'Gemini', slug: 'googlegemini' },
  { name: 'N8N', slug: 'n8n' },
  { name: 'Python', slug: 'python' },
  { name: 'SQL', slug: 'postgresql' },
  { name: 'Javascript', slug: 'javascript' },
  { name: 'Gitub', slug: 'gitub' },
  { name: 'HEX', slug: 'hex' },
  { name: 'Looker', slug: 'looker' },
  { name: 'Tableau', slug: 'tableau' },
  { name: 'Metabase', slug: 'metabase' },
  { name: 'Amplitude', slug: 'amplitude' },
  { name: 'Mixpanel', slug: 'mixpanel' },
  { name: 'Hubspot', slug: 'hubspot' },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'Google Analytics', slug: 'googleanalytics' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'Fivetran', slug: 'fivetran' },
  { name: 'DBT Cloud', slug: 'dbt' },
  { name: 'Dagster', slug: 'dagster' },
  { name: 'Snowflake', slug: 'snowflake' },
  { name: 'BigQuery', slug: 'googlebigquery' },
  { name: 'Jira', slug: 'jira' },
  { name: 'Trello', slug: 'trello' },
  { name: 'Linear', slug: 'linear' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'Typeform', slug: 'typeform' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4 italic">Stack</h2>
        <h3 className="text-3xl font-bold text-white tracking-tight">Technologies</h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {/* First set of tools */}
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <img 
                src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`} 
                alt={tool.name} 
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-medium tracking-wide text-sm uppercase">{tool.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {tools.map((tool, index) => (
            <div 
              key={`dup-${index}`} 
              className="mx-8 flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <img 
                src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`} 
                alt={tool.name} 
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-medium tracking-wide text-sm uppercase">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

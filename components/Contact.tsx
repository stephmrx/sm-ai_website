import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/10 border border-white/10 rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.4em] text-blue-400 uppercase mb-6 italic underline underline-offset-8">Consultation</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              Let's design intelligent systems together.
            </h3>
            <p className="text-gray-400 text-xl font-light mb-12 leading-relaxed">
              Whether you are looking for a Director of AI Transformation, Data & Analytics | Seek strategic guidance | Require a specific delivery or full scale end to end implementation. I can help on each stage of your Data, Analytics and AI journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="mailto:stephanmarx1@gmail.com" 
                className="text-white text-lg font-bold border-b-2 border-white hover:text-blue-400 hover:border-blue-400 transition-all pb-1"
              >
                contact@sm.ai
              </a>
              <span className="text-gray-600 hidden sm:block">|</span>
              <a 
                href="https://www.linkedin.com/in/stephanemarx1/" 
                className="text-white text-lg font-bold border-b-2 border-white hover:text-teal-400 hover:border-teal-400 transition-all pb-1"
              >
                LinkedIn 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
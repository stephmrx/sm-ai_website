import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = [
  { 
    text: 'DATA', 
    color: 'text-blue-500',
    highlights: [1] // First A
  },
  { 
    text: 'ANALYTICS', 
    color: 'text-white',
    highlights: [0, 6] // First A, First I
  },
  { 
    text: 'AUTOMATION', 
    color: 'text-teal-400',
    highlights: [0, 7] // First A, First I
  },
  { 
    text: 'AI', 
    color: 'text-cyan-400',
    highlights: [0, 1] // A, I
  }
];

const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => {
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full -mr-64 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[110px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto relative z-10 w-full">
        <div className="w-full">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Designing AI-Powered Decision Systems</span>
          </div>

          <div className="h-[5rem] sm:h-[7rem] md:h-[10rem] lg:h-[12rem] mb-8 relative overflow-visible">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter flex items-baseline whitespace-nowrap`}
              >
                {rotatingWords[wordIndex].text.split('').map((char, i) => (
                  <span 
                    key={i} 
                    className={rotatingWords[wordIndex].highlights.includes(i) ? 'text-cyan-400' : rotatingWords[wordIndex].color}
                  >
                    {char}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className="text-white font-light text-2xl md:text-4xl lg:text-5xl opacity-80 tracking-tight mb-12">
            POWERED BY HUMAN EXPERTISE.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 w-full max-w-7xl border-t border-white/10 pt-10">
            <div className="group">
              <div className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                Expertise
              </div>
              <ul className="space-y-3">
                {[
                  'Data Architecture',
                  'Analytics',
                  'Workflows',
                  'Agentic & Generative AI'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-white/60 text-sm md:text-base font-light tracking-tight group-hover:text-white/80 transition-colors">
                    <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group">
              <div className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                Services
              </div>
              <ul className="space-y-3">
                {[
                  'Strategic Guidance',
                  'Consulting',
                  'End-to-End Project Delivery',
                  'Workshop & Training'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-white/60 text-sm md:text-base font-light tracking-tight group-hover:text-white/80 transition-colors">
                    <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#approach" 
              className="px-10 py-5 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-cyan-500 hover:text-white transition-all duration-300 group rounded-sm shadow-xl"
            >
              Explore our Approach
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 border border-white/10 hover:border-white/40 text-white font-bold tracking-widest text-xs uppercase transition-all rounded-sm backdrop-blur-sm"
            >
              Let's Build Intelligent Systems
            </a>
          </div>
        </div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'experience'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'evolution') {
        setActivePage('experience');
      } else {
        setActivePage('home');
      }
      
      // Only scroll if hash exists and it's not for anchor navigation
      if (hash && hash !== 'approach' && hash !== 'contact' && hash !== 'services' && hash !== 'techstack') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <Navbar activePage={activePage} />
      
      <main className="transition-opacity duration-700 ease-in-out">
        {activePage === 'home' ? (
          <div className="space-y-4">
            <Hero />
            <Approach />
            <Services />
            <TechStack />
            <Contact />
          </div>
        ) : (
          <div className="pt-32 pb-20 space-y-20">
            <Experience />
            <Contact />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
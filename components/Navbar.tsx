import React from 'react';

interface NavbarProps {
  activePage: 'home' | 'experience';
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
          <span className="text-xl font-bold tracking-tighter text-white">SM.AI</span>
        </a>
        
        <div className="flex items-center space-x-8">
          <a 
            href="#" 
            className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'home' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
          >
            APPROACH
          </a>
          <a 
            href="#evolution" 
            className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'experience' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
          >
            EVOLUTION
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm"
          >
            LET'S BUILD
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
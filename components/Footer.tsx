import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold tracking-tighter text-white">SM.AI</span>
          <span className="text-gray-600 text-xs">/</span>
          <span className="text-gray-500 text-[10px] tracking-widest uppercase"> Decision Intelligence | AI Transformation | Data & Analytics </span>
        </div>
        
        <div className="text-gray-500 text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} SM.AI All rights reserved.
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-widest uppercase">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-widest uppercase">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

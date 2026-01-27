import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E3E5E8] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-[#333] mb-4">ARIM.LOG</h2>
        <p className="text-gray-500 mb-6">
          Always learning, always growing.<br/>
          Copyright © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm font-medium text-gray-400">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#03C75A] transition-colors">GitHub</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#03C75A] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
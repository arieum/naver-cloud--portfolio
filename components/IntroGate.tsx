import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroGate: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none font-sans">
      {/* Left Panel: Arim */}
      <motion.div
        className="relative w-1/2 h-full bg-[#03C75A] flex flex-col items-end justify-center overflow-hidden border-r border-green-400/30"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        {/* Left Content Container */}
        <div className="mr-4 md:mr-10 text-right z-10">
          <motion.p 
            className="text-white/80 font-mono text-lg md:text-xl mb-2 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            2026 Naver
          </motion.p>
          <motion.h1
            className="text-6xl md:text-[12rem] font-black text-white leading-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ARIM
          </motion.h1>
        </div>

        <div className="absolute bottom-10 right-10 text-right text-green-100 font-mono text-xs space-y-1 opacity-70">
           <p>SYSTEM_CHECK: OK</p>
           <p>MEMORY: ALLOCATED</p>
           <p>TARGET: NAVER_CLOUD</p>
        </div>
      </motion.div>

      {/* Right Panel: Log */}
      <motion.div
        className="relative w-1/2 h-full bg-[#03C75A] flex flex-col items-start justify-center overflow-hidden border-l border-green-400/30"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* Right Content Container */}
        <div className="ml-4 md:ml-10 z-10">
          <motion.p 
            className="text-white/60 font-mono text-lg md:text-xl mb-2 tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cloud Internship
          </motion.p>
          <motion.h1
            className="text-6xl md:text-[12rem] font-black text-white/40 leading-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            LOG
          </motion.h1>
        </div>

        {/* Loader Section */}
        <div className="absolute left-10 bottom-10 font-mono text-white z-20">
            <div className="text-4xl font-bold mb-2">
                {count}%
            </div>
            <div className="h-1 w-32 bg-green-800 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-white" 
                    style={{ width: `${count}%` }} 
                />
            </div>
            <p className="text-xs mt-2 text-green-100 font-mono">INITIALIZING PORTFOLIO...</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white z-50 -translate-x-1/2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ delay: 2.0, duration: 0.4 }}
      />
    </div>
  );
};

export default IntroGate;
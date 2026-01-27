import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, IMG_PROFILE } from '../constants';
import { Github, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-20 overflow-hidden bg-[#F5F6F7]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-white border border-[#E3E5E8] rounded-full text-[#03C75A] text-sm font-bold mb-4 shadow-sm">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#333] leading-tight tracking-tight">
              Hello,<br />
              I'm <span className="text-[#03C75A]">Arim Lee</span>.
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mt-2">
              Frontend Developer & AI Researcher
            </h2>
          </motion.div>

          <motion.p 
            className="text-gray-600 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Data와 AI를 연결하여 사용자 경험을 혁신하는 개발자 이아림입니다.<br/>
            직관적인 인터페이스와 지능형 기능의 조화를 탐구합니다.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#333] text-white font-bold rounded-sm shadow hover:bg-black transition-all transform hover:-translate-y-1">
              <Github size={20} /> Github
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-white border border-[#E3E5E8] text-[#333] font-bold rounded-sm shadow hover:bg-gray-50 transition-all transform hover:-translate-y-1">
              <Mail size={20} /> Contact
            </a>
          </motion.div>
        </div>

        {/* Big Flip Profile Card */}
        <div className="md:col-span-6 flex justify-center lg:justify-end items-center perspective-2000">
          <motion.div 
            className="relative w-[380px] h-[520px] md:w-[420px] md:h-[580px] cursor-pointer preserve-3d"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Front: Information */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-2xl border border-[#E3E5E8] p-10 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-black text-[#333] tracking-tighter">이아림</h3>
                  </div>
                </div>

                <div className="space-y-4">
                   <InfoRow icon={<MapPin size={20} className="text-[#03C75A]" />} label="Location" value={PERSONAL_INFO.address} />
                   <InfoRow icon={<Mail size={20} className="text-[#03C75A]" />} label="Email" value={PERSONAL_INFO.email} />
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-black mb-5 tracking-[0.2em] uppercase">Education</p>
                  <div className="space-y-5">
                    <div>
                      <p className="text-lg font-bold text-[#333]">Kangwon National University</p>
                      <p className="text-sm text-gray-500">Computer Engineering (2021.03 - 2026.02)</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#333]">Yubong Girls' High School</p>
                      <p className="text-sm text-gray-500">Academic (2017 - 2020)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center py-3 bg-[#F8F9FA] rounded-2xl text-xs font-bold text-gray-400 tracking-tight">
                MOUSE OVER TO VIEW PROFILE PHOTO
              </div>
            </div>

            {/* Back: Profile Image */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-2xl border border-[#E3E5E8] overflow-hidden rotate-y-180">
              <img 
                src={IMG_PROFILE} 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-mono opacity-60 mb-1 tracking-widest">IDENTITY_v1.0</p>
                <h4 className="text-3xl font-black tracking-tight">ARIM LEE</h4>
                <p className="text-[#03C75A] font-bold">2026_NaverCloud</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="p-2.5 bg-[#F8F9FA] rounded-xl shadow-sm">{icon}</div>
    <div className="min-w-0">
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</p>
      <p className="text-base text-[#333] font-semibold truncate">{value}</p>
    </div>
  </div>
);

export default Hero;
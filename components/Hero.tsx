import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, IMG_PROFILE } from '../constants';
import { Github, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 overflow-hidden bg-[#F5F6F7]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
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
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Data와 AI를 연결하여 사용자 경험을 혁신하는 개발자 이아림입니다.<br/>
            직관적인 인터페이스와 지능형 기능의 조화를 탐구합니다.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#333] text-white font-bold rounded-sm shadow hover:bg-black transition-all transform hover:-translate-y-1">
              <Github size={20} /> Github
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-white border border-[#E3E5E8] text-[#333] font-bold rounded-sm shadow hover:bg-gray-50 transition-all transform hover:-translate-y-1">
              <Mail size={20} /> Contact
            </a>
          </motion.div>
        </div>

        {/* Profile Card styled like Naver Search Result */}
        <motion.div 
          className="md:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#E3E5E8]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#333]">{PERSONAL_INFO.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Computer Engineering Student</p>
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                <img src={IMG_PROFILE} alt="Profile" className="w-full h-full grayscale object-cover" />
              </div>
            </div>

            <div className="space-y-4">
               <InfoRow icon={<MapPin size={18} />} label="Location" value={PERSONAL_INFO.address} />
               <InfoRow icon={<Mail size={18} />} label="Email" value={PERSONAL_INFO.email} />
               <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-bold mb-2">EDUCATION</p>
                  <p className="text-sm font-medium text-[#333]">Kangwon National University</p>
                  <p className="text-xs text-gray-500">Computer Engineering (2021.03 - 2026.02)</p>
                  <div className="my-4" />
                  <p className="text-sm font-medium text-[#333]">Yubong Girls' High School</p>
                  <p className="text-xs text-gray-500">Academic (2017 - 2020)</p>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-[#E8F8F0] rounded-lg border border-[#03C75A]/20" />
        </motion.div>

      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-400">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 font-bold uppercase">{label}</p>
      <p className="text-sm text-[#333] font-medium">{value}</p>
    </div>
  </div>
);

export default Hero;
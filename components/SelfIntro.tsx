import React from 'react';
import { motion } from 'framer-motion';
import { SELF_INTRO } from '../constants';
import { FileText, Quote } from 'lucide-react';

const SelfIntro: React.FC = () => {
  return (
    <section id="application" className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#03C75A] font-extrabold tracking-[0.2em] text-xs uppercase mb-3 block">NAVER CLOUD Apply</span>
          <h2 className="text-4xl font-black text-gray-900 flex items-center justify-center gap-3 leading-tight">
            Self Introduction
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#03C75A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#03C75A]"></span>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            네이버클라우드와 함께 성장할 준비가 된 저의 이야기를 들려드립니다.
          </p>
        </motion.div>

        <div className="space-y-10">
          {SELF_INTRO.map((item, idx) => {
            const qParts = item.question.split(/(\d+\.)/g).filter(Boolean);
            const qNumber = qParts[0];
            const qText = qParts.slice(1).join("").trim();

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
              >

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#03C75A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-8 relative">
                     <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-xl bg-[#03C75A]/10 flex items-center justify-center text-[#03C75A] font-black text-lg shadow-sm relative overflow-hidden group-hover:bg-[#03C75A] group-hover:text-white transition-colors duration-300">
                            {qNumber.replace('.','')}
                        </div>
                     </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug pt-1">
                      {qText}
                    </h3>
                  </div>
                  
                  <div className="relative pl-2 md:pl-4 border-l-2 border-gray-100 group-hover:border-[#03C75A]/30 transition-colors duration-300">
                    <p className="text-gray-600 leading-loose text-[1.05rem] whitespace-pre-line text-justify font-medium tracking-wide">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
import React from 'react';
import { motion } from 'framer-motion';
import { SELF_INTRO } from '../constants';
import { FileText, Quote } from 'lucide-react';

const SelfIntro: React.FC = () => {
  return (
    <section id="application" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#03C75A] font-bold tracking-wider text-sm mb-2 block">NAVER CLOUD</span>
          <h2 className="text-3xl font-black text-[#333] flex items-center justify-center gap-2">
            <FileText className="text-[#03C75A]" />
            SELF INTRODUCTION
          </h2>
        </motion.div>

        <div className="space-y-8">
          {SELF_INTRO.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#F5F6F7] border border-[#E3E5E8] rounded-xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200 group-hover:text-green-100 transition-colors">
                <Quote size={40} />
              </div>

              <h3 className="text-xl font-bold text-[#333] mb-4 pr-12 leading-snug">
                {item.question}
              </h3>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#03C75A] rounded-full" />
                <p className="pl-6 text-gray-700 leading-relaxed text-md whitespace-pre-line text-justify">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
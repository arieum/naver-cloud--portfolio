import React from 'react';
import { motion } from 'framer-motion';
import { CAREER_HISTORY } from '../constants';
import { ExternalLink, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl font-black text-[#333] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-[#E3E5E8] -translate-x-1/2" />

          <div className="space-y-12">
            {CAREER_HISTORY.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#03C75A] border-4 border-white rounded-full shadow-sm z-10 -translate-x-1/2 mt-6" />

                {/* Date Side */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                   <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#03C75A] bg-green-50 px-3 py-1 rounded-full mb-2">
                      <Calendar size={14} />
                      {exp.period}
                   </div>
                </div>

                {/* Content Side */}
                <div className={`md:w-1/2 pl-12 md:pl-0 w-full ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E3E5E8] hover:shadow-md transition-shadow group relative">
                    {/* Hover Decoration */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#03C75A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-lg" />
                    
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{exp.category}</span>
                       <a href={exp.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#03C75A]">
                          <ExternalLink size={16} />
                       </a>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#333] mb-1">{exp.company}</h3>
                    <h4 className="text-md font-medium text-gray-600 mb-4">{exp.role}</h4>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-gray-100">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
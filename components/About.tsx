import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, LICENSES } from '../constants';
import { Award, CheckCircle2, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Skills Section */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-[#333] mb-8 flex items-center gap-2">
                <Cpu className="text-[#03C75A]" />
                TECH STACK
              </h2>

              <div className="space-y-8">
                {SKILLS.map((skillGroup, idx) => (
                  <div key={idx} className="bg-[#F5F6F7] rounded-lg p-6 border border-[#E3E5E8]">
                    <h3 className="text-lg font-bold text-[#333] mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <motion.span 
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded shadow-sm border border-[#E3E5E8] flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#03C75A]" />
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Licenses & Side Info */}
          <div className="md:col-span-4">
             <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-black text-[#333] mb-8 flex items-center gap-2">
                <Award className="text-[#03C75A]" />
                LICENSES
              </h2>
              
              <div className="bg-white border border-[#E3E5E8] shadow-lg rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#03C75A]" />
                <ul className="space-y-6">
                  {LICENSES.map((license, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#03C75A] shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-bold text-[#333]">{license.name}</p>
                        <p className="text-sm text-gray-500 mt-1">{license.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
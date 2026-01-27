import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, MonitorPlay, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  // Helper to find demo link
  const demoLink = selectedProject?.links.find(l => l.type === 'demo');

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="text-[#03C75A] font-bold tracking-wider text-sm">PORTFOLIO</span>
              <h2 className="text-3xl font-black text-[#333] mt-2">FEATURED PROJECTS</h2>
           </div>
           <p className="text-gray-500 text-sm mt-4 md:mt-0">Click on a card to view details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer group relative bg-white rounded-xl overflow-hidden shadow-sm border border-[#E3E5E8] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold text-[#03C75A]">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#03C75A] transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              />
              <motion.div 
                layoutId={selectedId}
                className="fixed inset-4 md:inset-10 md:max-w-4xl md:mx-auto bg-white z-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-20"
                >
                  <X size={24} />
                </button>

                {/* Content Container - Scrollable */}
                <div className="flex flex-col h-full w-full overflow-y-auto hide-scrollbar">
                   
                   {/* Header Image */}
                   <div className="w-full h-64 md:h-80 relative shrink-0">
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                         <h2 className="text-3xl md:text-4xl font-black text-white">{selectedProject.title}</h2>
                         <p className="text-white/90 text-lg mt-2 font-medium">{selectedProject.subtitle}</p>
                      </div>
                   </div>

                   {/* Body */}
                   <div className="p-8 md:p-10 space-y-8">
                      
                      {/* Tech & Links */}
                      <div className="flex flex-col md:flex-row gap-6 justify-between items-start border-b border-gray-100 pb-8">
                         <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-400 mb-3">TECH STACK</h4>
                            <div className="flex flex-wrap gap-2">
                               {selectedProject.techStack.map(tech => (
                                  <span key={tech} className="px-3 py-1 bg-[#F5F6F7] text-[#333] rounded-md text-sm font-medium border border-[#E3E5E8]">{tech}</span>
                               ))}
                            </div>
                         </div>
                         <div className="flex gap-3">
                            {selectedProject.links.map((link, idx) => (
                               <a 
                                key={idx} 
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] text-white rounded font-bold hover:bg-[#02b351] transition-colors text-sm"
                               >
                                  {link.type === 'github' ? <Github size={16} /> : 
                                   link.type === 'demo' ? <MonitorPlay size={16} /> : <FileText size={16} />}
                                  {link.label}
                               </a>
                            ))}
                         </div>
                      </div>

                      {/* Demo Video Section - Added */}
                      {demoLink && demoLink.url && (
                        <div className="mb-8">
                           <h3 className="text-xl font-bold text-[#333] mb-4 flex items-center gap-2">
                              <MonitorPlay className="text-[#03C75A]" /> Project Demo
                           </h3>
                           <div className="w-full rounded-lg overflow-hidden border border-[#E3E5E8] shadow-sm bg-black">
                             <video 
                               src={demoLink.url} 
                               controls 
                               className="w-full h-auto max-h-[500px]"
                             >
                               Your browser does not support the video tag.
                             </video>
                           </div>
                        </div>
                      )}

                      {/* Overview */}
                      <div>
                         <h3 className="text-xl font-bold text-[#333] mb-4">Overview</h3>
                         <p className="text-gray-700 leading-relaxed whitespace-pre-line bg-[#F9FAFB] p-6 rounded-lg border border-[#E3E5E8]">
                            {selectedProject.detailedOverview}
                         </p>
                      </div>

                      {/* Features Grid */}
                      <div>
                         <h3 className="text-xl font-bold text-[#333] mb-4">Key Features</h3>
                         <ul className="grid md:grid-cols-2 gap-4">
                            {selectedProject.features.map((feat, i) => (
                               <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#03C75A] mt-1.5 shrink-0" />
                                  {feat}
                               </li>
                            ))}
                         </ul>
                      </div>

                      {/* Role */}
                       <div>
                         <h3 className="text-xl font-bold text-[#333] mb-4">My Role</h3>
                         <ul className="space-y-2">
                            {selectedProject.myRole.map((role, i) => (
                               <li key={i} className="text-gray-700 text-sm pl-4 border-l-2 border-[#03C75A]">
                                  {role}
                               </li>
                            ))}
                         </ul>
                      </div>

                   </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
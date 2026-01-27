import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { Image as ImageIcon, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-black text-[#333] mb-12 text-center flex items-center justify-center gap-2">
          <ImageIcon className="text-[#03C75A]" />
          GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              layoutId={`gallery-${item.id}`}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#03C75A] text-xs font-bold bg-white/10 backdrop-blur-sm px-2 py-1 rounded w-fit mb-2 border border-white/20">
                   {item.tag}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                <p className="text-gray-400 text-xs mt-2">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
             <>
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 onClick={() => setSelectedItem(null)}
                 className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
               />
               <motion.div 
                 layoutId={`gallery-${selectedItem.id}`}
                 className="fixed inset-4 md:inset-20 md:max-w-6xl md:mx-auto bg-white z-50 rounded-lg overflow-hidden shadow-2xl flex flex-col"
               >
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors z-20"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col h-full overflow-y-auto">
                     <div className="p-8 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-[#03C75A] font-bold text-sm bg-green-50 px-2 py-1 rounded">{selectedItem.tag}</span>
                           <span className="text-gray-400 text-sm">{selectedItem.date}</span>
                        </div>
                        <h2 className="text-3xl font-black text-[#333] mb-2">{selectedItem.title}</h2>
                        <p className="text-gray-600">{selectedItem.description}</p>
                     </div>

                     <div className="flex-1 p-8 pt-0 overflow-y-auto hide-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {/* Main Image */}
                           <div className="md:col-span-2 rounded-lg overflow-hidden shadow-md">
                              <img src={selectedItem.image} alt="Main" className="w-full h-auto object-cover" />
                           </div>
                           
                           {/* Additional Images */}
                           {selectedItem.additionalImages.map((img, idx) => (
                              <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                                 <img src={img} alt={`Additional ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                              </div>
                           ))}
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

export default Gallery;
import React from 'react';
import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "AGENTE SENIOR",
    videoThumbnail: "https://picsum.photos/400/300?random=1",
    quote: "Dupliqué mis ventas en solo 3 meses aplicando el módulo 2."
  },
  {
    id: 2,
    name: "Ana Márquez",
    role: "DUEÑA AGENCIA",
    videoThumbnail: "https://picsum.photos/400/300?random=2",
    quote: "El sistema no es teoría, es implementación pura."
  },
  {
    id: 3,
    name: "Roberto Gómez",
    role: "INDEPENDIENTE",
    videoThumbnail: "https://picsum.photos/400/300?random=3",
    quote: "Dejé de hacer llamadas en frío para siempre."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            CHECK OUT MORE <span className="text-brand-neon">RESULTS</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
            Más de 500 agentes han escalado con nosotros
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-8 snap-x">
          
          {/* Static CTA Card */}
          <div className="min-w-[300px] md:min-w-[350px] bg-brand-card rounded-2xl p-8 border border-white/10 flex flex-col justify-center snap-center">
             <h3 className="text-3xl font-bold text-white mb-4">
               "$37 to $4,000"
             </h3>
             <p className="text-gray-400 mb-6">
               "This program transformed my agency's growth entirely."
             </p>
             <div className="mt-auto">
               <p className="text-brand-neon font-bold uppercase">Ivan</p>
               <p className="text-gray-500 text-sm">Real Estate Agent</p>
             </div>
          </div>

          {/* Video Cards */}
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-[300px] md:min-w-[450px] relative bg-brand-card rounded-2xl overflow-hidden border border-white/10 group cursor-pointer snap-center">
              <div className="aspect-video relative">
                <img 
                  src={item.videoThumbnail} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-brand-neon/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="text-black ml-1" size={24} fill="black" />
                   </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  "{item.quote}"
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-brand-neon text-xs font-mono">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Hints */}
        <div className="flex justify-end gap-4 mt-4 px-4">
           <button className="p-3 rounded-full border border-white/20 text-white hover:bg-brand-neon hover:text-black transition-colors">
             <ChevronLeft size={20} />
           </button>
           <button className="p-3 rounded-full border border-white/20 text-white hover:bg-brand-neon hover:text-black transition-colors">
             <ChevronRight size={20} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
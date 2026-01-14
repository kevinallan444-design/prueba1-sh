import React from 'react';
import { Check, Play } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-black text-white pt-24 pb-20 overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-neon rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-brand-neon/30 rounded-full bg-brand-neon/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
            <span className="text-brand-neon font-mono text-xs md:text-sm uppercase tracking-widest">Entrenamiento Exclusivo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            DESCUBRE EL <br/>
            <span className="text-brand-neon">MÉTODO SOLD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-normal max-w-3xl mx-auto leading-relaxed">
            Cómo vendí <span className="text-white font-bold border-b-2 border-brand-neon">+850 Propiedades</span> y generé <span className="text-white font-bold border-b-2 border-brand-neon">+1.5M USD</span> en menos de 3 años.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base font-medium text-gray-300">
            {["Mismos clientes", "Sin presión", "Sin puerta fría"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-brand-card border border-white/10 px-4 py-2 rounded-lg">
                <Check className="text-brand-neon" size={16} />
                <span className="uppercase tracking-wide text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VSL Placeholder - Modern Tech Look */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Neon Glow behind container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-white opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"></div>
          
          <div className="relative bg-brand-card rounded-2xl border border-white/10 p-2 shadow-2xl">
            <div className="aspect-video bg-black rounded-xl relative overflow-hidden group cursor-pointer flex items-center justify-center">
              <img 
                src="https://picsum.photos/1200/675" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-brand-neon/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(254,253,127,0.3)] group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <Play fill="black" className="text-black ml-2" size={40} />
                </div>
                <p className="text-white font-bold text-sm tracking-[0.2em] uppercase mt-4">Ver Clase Gratuita</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" withIcon className="mx-auto text-xl px-12 py-6 shadow-[0_0_40px_rgba(254,253,127,0.2)]">
            ACCEDER AL MÉTODO SOLD
          </Button>
          <p className="mt-6 text-gray-500 text-xs uppercase tracking-widest">
            *Plazas limitadas para esta generación
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
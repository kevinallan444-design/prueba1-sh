import React from 'react';
import Button from './Button';

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
              LOS NÚMEROS <br/> <span className="text-brand-neon">NO MIENTEN</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Nuestra metodología ha sido probada en batalla. No son teorías académicas, son resultados de calle en mercados reales.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-brand-card rounded-xl border border-white/10">
                <div className="text-4xl font-black text-brand-neon mb-2">85%</div>
                <h4 className="font-bold text-white text-sm uppercase">Tasa de Cierre</h4>
                <p className="text-gray-500 text-xs mt-2">En los primeros 30 días</p>
              </div>
              
              <div className="p-6 bg-brand-card rounded-xl border border-white/10">
                <div className="text-4xl font-black text-brand-neon mb-2">3X</div>
                <h4 className="font-bold text-white text-sm uppercase">Retorno (ROI)</h4>
                <p className="text-gray-500 text-xs mt-2">Promedio trimestral</p>
              </div>
            </div>

            <Button variant="outline">Ver Auditoría de Resultados</Button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 translate-y-8">
                <img src="https://picsum.photos/300/400?random=10&grayscale" alt="Success 1" className="rounded-xl border border-white/10 hover:border-brand-neon transition-colors grayscale hover:grayscale-0 opacity-80 hover:opacity-100" />
                <img src="https://picsum.photos/300/300?random=11&grayscale" alt="Success 2" className="rounded-xl border border-white/10 hover:border-brand-neon transition-colors grayscale hover:grayscale-0 opacity-80 hover:opacity-100" />
             </div>
             <div className="space-y-4">
                <img src="https://picsum.photos/300/300?random=12&grayscale" alt="Success 3" className="rounded-xl border border-white/10 hover:border-brand-neon transition-colors grayscale hover:grayscale-0 opacity-80 hover:opacity-100" />
                <img src="https://picsum.photos/300/400?random=13&grayscale" alt="Success 4" className="rounded-xl border border-white/10 hover:border-brand-neon transition-colors grayscale hover:grayscale-0 opacity-80 hover:opacity-100" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;
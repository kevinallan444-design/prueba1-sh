import React from 'react';
import Button from './Button';

const Bio: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute top-4 -left-4 w-full h-full border border-brand-neon/30 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden bg-brand-card border border-white/10">
              <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="Mentor Profesional" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                <h3 className="text-white text-3xl font-bold uppercase italic">Tu Mentor</h3>
                <p className="text-brand-neon font-mono text-sm tracking-widest mt-1">FUNDADOR MÉTODO SOLD</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h4 className="text-brand-neon font-mono text-sm uppercase tracking-widest mb-4">Biografía Profesional</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              QUIÉN SOY Y POR QUÉ <br/>
              PUEDO AYUDARTE.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                El mercado inmobiliario está roto. Lo sé porque estuve ahí. Llamadas en frío, puertas cerradas y la constante presión de "producir o morir".
              </p>
              <p>
                Me negué a aceptar ese destino. Desarrollé el <strong className="text-white">Método SOLD</strong> combinando psicología de alto nivel con sistemas de adquisición modernos.
              </p>
              <p className="border-l-2 border-brand-neon pl-4 text-white italic">
                "No se trata de trabajar más duro. Se trata de tener un sistema que trabaje por ti."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div>
                  <span className="block text-3xl font-bold text-white">+10</span>
                  <span className="text-xs text-brand-gray uppercase tracking-wider">Años Exp.</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">TOP 1%</span>
                  <span className="text-xs text-brand-gray uppercase tracking-wider">Ranking</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">500+</span>
                  <span className="text-xs text-brand-gray uppercase tracking-wider">Alumnos</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "ATRACCIÓN MAGNÉTICA",
      description: "Dejamos de perseguir. Implementamos sistemas de atracción que hacen que los propietarios cualificados levanten la mano pidiendo tu ayuda. Tu roadmap paso a paso para escalar.",
      image: "https://picsum.photos/400/300?random=100"
    },
    {
      id: "02",
      title: "CONVERSIÓN PSICOLÓGICA",
      description: "Utilizamos guiones de neuroventas que eliminan la fricción. Plug-and-play funnels y scripts probados que eliminan las conjeturas.",
      image: "https://picsum.photos/400/300?random=101"
    },
    {
      id: "03",
      title: "ESCALADO SISTEMÁTICO",
      description: "Automatización total. Gestiona 10x más volumen sin trabajar más horas. Construye un negocio, no un autoempleo.",
      image: "https://picsum.photos/400/300?random=102"
    }
  ];

  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
       {/* Background noise texture optional */}
       <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <p className="text-brand-neon font-mono text-sm uppercase mb-4">EL PROCESO</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            TODO LO QUE TIENES <br/> QUE HACER ES <span className="text-brand-neon">EJECUTAR</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-neon/50 to-transparent"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Text Side */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="relative">
                    {/* Big Number Background */}
                    <span className={`absolute -top-16 text-[120px] font-black text-white/5 leading-none select-none ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
                      {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 relative z-10 text-brand-neon">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-neon rounded-full -translate-x-1.5 shadow-[0_0_10px_#fefd7f]"></div>

                {/* Image Side */}
                <div className="flex-1 pl-12 md:pl-0 w-full">
                  <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-brand-neon uppercase border border-brand-neon/30 px-2 py-1 rounded bg-black/50 backdrop-blur">
                      Paso {step.id} Blueprint
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
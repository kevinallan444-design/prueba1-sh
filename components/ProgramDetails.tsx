import React from 'react';
import { BookOpen, Video, Users2, Award, ShieldCheck, Zap } from 'lucide-react';

const ProgramDetails: React.FC = () => {
  const modules = [
    {
      icon: <BookOpen className="text-brand-neon" />,
      title: "Material de Trabajo",
      description: "Plantillas, scripts de venta, contratos y checklists listos para copiar."
    },
    {
      icon: <Video className="text-brand-neon" />,
      title: "8 Semanas de Contenido",
      description: "Módulos HD cubriendo desde mentalidad hasta cierre avanzado."
    },
    {
      icon: <Users2 className="text-brand-neon" />,
      title: "Comunidad Exclusiva",
      description: "Networking privado donde compartimos victorias en tiempo real."
    },
    {
      icon: <Zap className="text-brand-neon" />,
      title: "Sesiones de Q&A",
      description: "Mentoría semanal grupal para desbloquear tu progreso."
    },
    {
      icon: <Award className="text-brand-neon" />,
      title: "Certificación SOLD",
      description: "Diploma oficial que te acredita como especialista."
    },
    {
      icon: <ShieldCheck className="text-brand-neon" />,
      title: "Garantía de Acción",
      description: "Si implementas y no ves resultados, trabajamos contigo."
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h4 className="text-brand-neon font-mono text-sm uppercase mb-2">QUÉ INCLUYE</h4>
            <h2 className="text-4xl font-black text-white uppercase leading-none">
              DESBLOQUEA TU <br/>CRECIMIENTO
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Todo lo que necesitas para escalar tu negocio inmobiliario, empaquetado en una plataforma de última generación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => (
            <div key={index} className="p-8 rounded-2xl border border-white/10 bg-brand-card hover:bg-brand-dark transition-colors duration-300 group hover:border-brand-neon/30">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-neon/10 transition-colors">
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{mod.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
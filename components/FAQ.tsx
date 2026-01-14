import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "¿Qué es exactamente SOLD MI?",
    answer: "SOLD MI (Mastery Inmobiliario) es un programa de implementación intensiva. No es solo un curso de videos; es un sistema de mentoría donde te damos las herramientas, guiones y procesos exactos que generaron $1.5M, y te acompañamos en su implementación."
  },
  {
    question: "¿Cuánto tiempo tardaré en ver resultados?",
    answer: "Depende de tu nivel de compromiso. Nuestros alumnos más aplicados suelen cerrar su primera captación con el nuevo método en las primeras 2-3 semanas. El sistema está diseñado para dar victorias rápidas."
  },
  {
    question: "¿Cuándo comenzaré a ver el retorno de inversión?",
    answer: "Con una sola venta promedio, la mayoría de nuestros alumnos cubren el costo total del programa y generan ganancia. Nuestro objetivo es que esto suceda dentro de los primeros 60 días."
  },
  {
    question: "¿Cómo sé que esto es para mí?",
    answer: "Si eres un agente inmobiliario cansado de perseguir clientes, de depender de portales inmobiliarios o de hacer llamadas en frío, esto es para ti. Si ya tienes experiencia pero estás estancado en un nivel de ingresos, esto te ayudará a escalar."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase">¿Dudas?</h2>
          <p className="text-gray-500">
            Todo claro, sin letras pequeñas.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-brand-card rounded-xl border transition-all duration-300 ${
                openIndex === index ? 'border-brand-neon shadow-[0_0_15px_rgba(254,253,127,0.1)]' : 'border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-neon' : 'text-white'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-neon shrink-0" />
                ) : (
                  <Plus className="text-gray-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2 text-sm">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
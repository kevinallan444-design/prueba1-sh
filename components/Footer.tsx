import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-24 text-center max-w-4xl border-b border-white/10">
        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none uppercase">
          ¿LISTO PARA <br/> <span className="text-brand-neon">TRANSFORMARTE?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          No dejes pasar otro año con los mismos resultados. Únete a la élite inmobiliaria hoy.
        </p>
        <Button variant="primary" withIcon className="mx-auto text-xl px-16 py-6 shadow-[0_0_30px_rgba(254,253,127,0.3)] hover:shadow-[0_0_50px_rgba(254,253,127,0.5)]">
          APLICAR AHORA
        </Button>
        <p className="mt-8 text-gray-600 text-xs uppercase tracking-widest font-mono">
          Garantía de Satisfacción 100%
        </p>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter">
            MÉTODO <span className="text-brand-neon">SOLD</span>
          </div>
          <div className="text-gray-600 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Método SOLD. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-neon transition-colors">Términos</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
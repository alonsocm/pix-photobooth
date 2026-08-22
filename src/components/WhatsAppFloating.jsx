import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function WhatsAppFloating() {
  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-2 rounded-xl bg-pix-card/95 backdrop-blur-md border border-pix-green/40 shadow-neon-green text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        💬 ¿Deseas cotizar? ¡Escríbenos!
      </div>

      {/* Floating Button */}
      <a
        href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Me gustaría cotizar la cabina de fotos para mi evento.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse beacon rings */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
        <span className="relative z-10">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-600" />
        </span>
      </a>
    </aside>
  );
}

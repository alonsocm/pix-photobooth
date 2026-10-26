import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-pix-dark overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-pix-pink shadow-neon-pink">
            <HelpCircle className="w-4 h-4" />
            <span>Resolvemos tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink to-pix-cyan">Frecuentes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Todo lo que necesitas saber antes de rentar tu cabina fotográfica PIX en Hidalgo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'glass-card border-pix-pink/50 shadow-neon-pink'
                    : 'glass-card border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-pix-pink text-white rotate-180' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  hidden={!isOpen}
                  className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl glass-card border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">¿Tienes alguna pregunta adicional?</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Escríbenos directamente por WhatsApp y te atendemos al momento sin ningún compromiso.
          </p>
          <a
            href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Tengo una duda sobre el servicio de cabina de fotos en Tulancingo.')}`}
            data-ubicacion="faq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pix-pink to-pix-purple text-white text-sm font-bold shadow-neon-pink hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Preguntar por WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
          </a>
        </div>

      </div>
    </section>
  );
}

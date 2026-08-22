import React from 'react';
import { Check, Star, Sparkles, MessageCircle, Crown, Zap } from 'lucide-react';
import { PACKAGES, BUSINESS_INFO } from '../data/content';

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 md:py-28 relative bg-pix-dark overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pix-purple/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-pix-pink shadow-neon-pink">
            <Sparkles className="w-4 h-4 text-pix-pink" />
            <span>Precios Transparentes y Sin Sorpresas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-glow-pink">Paquetes Populares</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Elige la duración y los complementos perfectos para que tus invitados se diviertan al máximo.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const whatsappMsg = encodeURIComponent(
              `¡Hola PIX! Me interesa apartar el *${pkg.name}* (${pkg.hours} por ${pkg.price}) para mi evento en Tulancingo / Hidalgo. ¿Tienen disponibilidad?`
            );

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'glass-card border-2 border-pix-pink shadow-neon-pink md:-translate-y-3 bg-gradient-to-b from-pix-card to-pix-card/90'
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pix-pink to-pix-purple text-white text-xs font-black tracking-wider uppercase shadow-neon-pink flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Más Elegido en Tulancingo</span>
                  </div>
                )}

                <div>
                  {/* Badge & Title */}
                  <div className="text-xs font-mono text-pix-cyan font-semibold tracking-wider uppercase mb-2">
                    {pkg.badge}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mb-6">{pkg.hours}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">MXN</span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${
                          isPopular ? 'bg-pix-pink text-white' : 'bg-pix-cyan/20 text-pix-cyan'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <a
                  href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-white shadow-neon-pink hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </a>

              </div>
            );
          })}
        </div>

        {/* Custom Event Note */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">¿Necesitas un paquete personalizado o más horas?</h4>
            <p className="text-xs text-slate-400">Armamos una propuesta a la medida de tu presupuesto y horario.</p>
          </div>
          <a
            href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Me gustaría cotizar un paquete personalizado para mi evento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-pix-cyan/20 hover:bg-pix-cyan/30 text-pix-cyan border border-pix-cyan/40 text-xs font-bold whitespace-nowrap transition-all"
          >
            Hablar con un Asesor
          </a>
        </div>

      </div>
    </section>
  );
}

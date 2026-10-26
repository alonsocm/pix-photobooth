import React from 'react';
import { Check, Star, Sparkles, MessageCircle } from 'lucide-react';
import { PACKAGES, BUSINESS_INFO, SHARED_INCLUSIONS, EXTRA_HOUR, formatMxn } from '../data/content';

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 md:py-28 relative bg-pix-dark overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pix-purple/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-pix-pink shadow-neon-pink">
            <Sparkles className="w-4 h-4 text-pix-pink" />
            <span>Precios transparentes y sin sorpresas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-glow-pink">paquetes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Elige 2 o 3 horas. Los dos paquetes incluyen el mismo servicio; cambia la duración.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-10 rounded-3xl glass-card border border-white/10 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-5">Todos los paquetes incluyen</h3>
          <ul className="grid sm:grid-cols-2 gap-3.5">
            {SHARED_INCLUSIONS.map((feature) => {
              const isPlus = feature.startsWith('PLUS:');
              return (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${isPlus ? 'bg-pix-cyan text-pix-dark' : 'bg-pix-pink/20 text-pix-pink'}`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className={isPlus ? 'font-semibold text-white' : ''}>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const whatsappMsg = encodeURIComponent(
              `¡Hola PIX! Me interesa apartar el *${pkg.name}* (${pkg.hours} horas por ${formatMxn(pkg.price)} MXN) para mi evento. ¿Tienen disponibilidad?`
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
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pix-pink to-pix-purple text-white text-xs font-black tracking-wider uppercase shadow-neon-pink flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-300 mb-6">{pkg.summary}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                        {formatMxn(pkg.price)}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">MXN</span>
                    </div>
                    <p className="text-sm text-pix-cyan font-semibold mt-2">{pkg.hours} horas de servicio</p>
                  </div>

                  <p className="text-sm text-slate-300 mb-8">
                    Incluye todo lo del servicio PIX, con {pkg.hours === 2 ? 'dos' : 'tres'} horas de cabina.
                  </p>
                </div>

                <a
                  href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${whatsappMsg}`}
                  data-ubicacion={`paquete-${pkg.id}`}
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

        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">¿Necesitas un paquete personalizado o más horas?</h4>
            <p className="text-xs text-slate-400">
              La hora adicional cuesta {formatMxn(EXTRA_HOUR.price)} MXN. Si necesitas otro horario, armamos una propuesta a la medida.
            </p>
          </div>
          <a
            href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Me gustaría cotizar un paquete personalizado para mi evento.')}`}
            data-ubicacion="paquete-personalizado"
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

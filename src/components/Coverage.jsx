import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_INFO, NEARBY_PLACE_NOTE } from '../data/content';

export default function Coverage() {
  return (
    <section className="py-20 relative bg-pix-dark overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-pix-cyan/30 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pix-cyan/15 blur-[120px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pix-cyan/15 border border-pix-cyan/40 text-xs font-bold text-pix-cyan">
                <MapPin className="w-4 h-4" />
                <span>Tulancingo y alrededores</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Llevamos la Fiesta a <span className="text-pix-cyan">Tulancingo, Santiago Tulantepec, Acatlán, Cuautepec y alrededores</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nos encargamos del traslado, montaje profesional y desmontaje sin que te preocupes por nada. Llegamos con <strong>1 hora de anticipación</strong> para tener todo listo antes de que lleguen tus primeros invitados.
              </p>

              {/* Coverage tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {BUSINESS_INFO.coverage.map((city, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                  >
                    <Navigation className="w-3 h-3 text-pix-pink" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{NEARBY_PLACE_NOTE}</p>
            </div>

            {/* Right Card / Punctuality Guarantee */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-pix-card/90 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pix-pink/20 text-pix-pink flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Garantía de Puntualidad</h4>
                    <p className="text-xs text-slate-400">Instalación lista antes del inicio de tu fiesta</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pix-green/20 text-pix-green flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Equipo 100% Profesional</h4>
                    <p className="text-xs text-slate-400">Cámaras HD, luces LED e impresoras de alta velocidad</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pix-cyan/20 text-pix-cyan flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sin Costo de Viáticos en Tulancingo</h4>
                    <p className="text-xs text-slate-400">Tulancingo y Santiago Tulantepec incluidos</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

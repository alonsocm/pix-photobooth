import React, { useState } from 'react';
import { Calculator as CalcIcon, Check, MessageCircle, MapPin, Clock, Sparkles, AlertCircle } from 'lucide-react';
import {
  BUSINESS_INFO,
  EVENT_TYPES,
  ADDONS,
  PACKAGES,
  QUOTER_ZONES,
  SHARED_INCLUSIONS,
  formatMxn,
  travelStatusLabel,
  quoteTotalLabel,
  TRAVEL_PRICE_NOTE,
} from '../data/content';
import confetti from 'canvas-confetti';

const popularPackage = PACKAGES.find((pkg) => pkg.popular) || PACKAGES[0];

function formatEventDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return isoDate;
  return new Date(year, month - 1, day).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Calculator() {
  const [eventType, setEventType] = useState('boda');
  const [hours, setHours] = useState(popularPackage.hours);
  const [location, setLocation] = useState('Tulancingo de Bravo');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [approxDate, setApproxDate] = useState('');

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const selectedPackage = PACKAGES.find((pkg) => pkg.hours === hours) || PACKAGES[0];
  const selectedZone = QUOTER_ZONES.find((zone) => zone.name === location) || QUOTER_ZONES[0];
  const travelIncluded = Boolean(selectedZone.travelIncluded);
  const basePrice = selectedPackage.price;
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDONS.find((item) => item.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);
  const serviceTotal = basePrice + addonsPrice;
  const totalLabel = quoteTotalLabel(serviceTotal, travelIncluded);

  const eventObj = EVENT_TYPES.find((event) => event.id === eventType);
  const extrasLabel = selectedAddons
    .map((id) => ADDONS.find((addon) => addon.id === id)?.name)
    .filter(Boolean)
    .join(', ');
  const quoteLines = [
    '¡Hola PIX Cabina Fotográfica! Me gustaría consultar disponibilidad para mi evento:',
    '',
    `🎉 *Tipo de evento:* ${eventObj ? eventObj.name : eventType}`,
  ];
  if (approxDate) {
    quoteLines.push(`📅 *Fecha:* ${formatEventDate(approxDate)}`);
  }
  quoteLines.push(
    `⏱️ *Horas:* ${selectedPackage.hours} horas (${selectedPackage.name})`,
    `📍 *Municipio:* ${selectedZone.name}`,
    `✨ *Extras:* ${extrasLabel || 'Ninguno'}`,
    `💰 *Total:* ${totalLabel}`,
    '',
    approxDate ? '¿Tienen disponible esta fecha?' : '¿Tienen disponibilidad?'
  );
  const whatsappHref = `https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent(quoteLines.join('\n'))}`;

  const handleWhatsappBooking = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 relative bg-pix-card/50 overflow-hidden">
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-pix-pink/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pix-cyan/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-green/40 text-xs sm:text-sm font-semibold text-pix-green shadow-neon-green">
            <CalcIcon className="w-4 h-4 text-pix-green" />
            <span>Presupuesto instantáneo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Cotiza tu cabina en <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-green via-pix-cyan to-pix-pink">30 segundos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Elige las horas, el municipio y, si la quieres, una hora adicional.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-pink/20 text-pix-pink flex items-center justify-center text-xs font-mono">1</span>
                <span>¿Qué tipo de evento vas a celebrar?</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {EVENT_TYPES.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setEventType(event.id)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                      eventType === event.id
                        ? 'border-pix-pink bg-pix-pink/20 text-white shadow-neon-pink'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl">{event.icon}</span>
                    <span className="text-xs font-semibold">{event.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-cyan/20 text-pix-cyan flex items-center justify-center text-xs font-mono">2</span>
                <Clock className="w-4 h-4 text-pix-cyan" />
                <span>¿Cuántas horas de servicio necesitas?</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setHours(pkg.hours)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      hours === pkg.hours
                        ? 'border-pix-cyan bg-pix-cyan/20 text-white shadow-neon-cyan'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-sm font-bold">{pkg.hours} h</div>
                    <div className="text-xs font-mono mt-0.5">{formatMxn(pkg.price)}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {pkg.popular ? pkg.badge : pkg.name.replace('Paquete ', '')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-violet/20 text-pix-violet flex items-center justify-center text-xs font-mono">3</span>
                <MapPin className="w-4 h-4 text-pix-violet" />
                <span>Ubicación del evento y fecha</span>
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quoter-municipio" className="text-xs text-slate-300 mb-1.5 block">Municipio:</label>
                  <select
                    id="quoter-municipio"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pix-dark border border-white/15 text-white text-sm focus:outline-none focus:border-pix-violet"
                  >
                    {QUOTER_ZONES.map((zone) => (
                      <option key={zone.name} value={zone.name} className="bg-pix-dark text-white">
                        {zone.name} — {travelStatusLabel(zone.travelIncluded)}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-pix-cyan mt-1.5">{travelStatusLabel(travelIncluded)}</p>
                </div>

                <div>
                  <label htmlFor="quoter-fecha" className="text-xs text-slate-300 mb-1.5 block">Fecha de tu evento (opcional):</label>
                  <input
                    id="quoter-fecha"
                    type="date"
                    value={approxDate}
                    onChange={(event) => setApproxDate(event.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pix-dark border border-white/15 text-white text-sm focus:outline-none focus:border-pix-violet"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-green/20 text-pix-green flex items-center justify-center text-xs font-mono">4</span>
                <Sparkles className="w-4 h-4 text-pix-green" />
                <span>Hora adicional</span>
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          toggleAddon(addon.id);
                        }
                      }}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-white/10 border-pix-pink/50 text-white'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isChecked ? 'bg-pix-pink border-pix-pink text-white' : 'border-slate-500'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-200">{addon.name}</div>
                          <div className="text-[11px] text-slate-400">{addon.description}</div>
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-pix-cyan flex-shrink-0">
                        +{formatMxn(addon.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pix-pink/30 shadow-neon-pink space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-pix-pink/20 text-pix-pink">
                    <CalcIcon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white">Resumen de cotización</h3>
                </div>
                <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                  PIX Hidalgo
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 text-slate-300">
                  <span>{selectedPackage.name} ({selectedPackage.hours} h):</span>
                  <span className="font-mono font-bold text-white">{formatMxn(basePrice)}</span>
                </div>

                {selectedAddons.map((id) => {
                  const addon = ADDONS.find((item) => item.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between gap-4 text-xs text-slate-400">
                      <span>+ {addon.name}:</span>
                      <span className="font-mono text-slate-300">{formatMxn(addon.price)}</span>
                    </div>
                  );
                })}

                <div className="flex justify-between gap-4 text-xs text-slate-400">
                  <span>Traslado ({selectedZone.name}):</span>
                  <span className="font-medium text-slate-200">{travelStatusLabel(travelIncluded)}</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block">Total estimado</span>
                      <span className="text-[11px] text-pix-green">Fotos ilimitadas incluidas</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-glow-white leading-tight">
                        {totalLabel}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-3">{TRAVEL_PRICE_NOTE}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-pix-cyan" />
                  <span>Tu servicio incluye siempre:</span>
                </div>
                {SHARED_INCLUSIONS.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <a
                href={whatsappHref}
                data-ubicacion="cotizador"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappBooking}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-white font-extrabold text-base shadow-neon-pink hover:scale-[1.03] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Apartar fecha por WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center">
                <AlertCircle className="w-3.5 h-3.5 text-pix-pink" />
                <span>Aparta tu fecha con solo $500 MXN de anticipo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

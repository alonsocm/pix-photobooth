import React, { useState } from 'react';
import { Calculator as CalcIcon, Check, Plus, MessageCircle, MapPin, Clock, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, EVENT_TYPES, ADDONS } from '../data/content';
import confetti from 'canvas-confetti';

export default function Calculator() {
  const [eventType, setEventType] = useState('boda');
  const [hours, setHours] = useState(3);
  const [location, setLocation] = useState('Tulancingo de Bravo');
  const [selectedAddons, setSelectedAddons] = useState(['guestbook', 'vip_carpet']);
  const [approxDate, setApproxDate] = useState('');

  const hourPricing = {
    2: 3200,
    3: 4400,
    4: 5600,
    5: 6700
  };

  const travelFees = {
    'Tulancingo de Bravo': 0,
    'Santiago Tulantepec': 0,
    'Cuautepec de Hinojosa': 100,
    'Acatlán / Singuilucan': 200,
    'Pachuca y Alrededores': 450,
    'Otro Municipio en Hidalgo': 300
  };

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const basePrice = hourPricing[hours] || 3200;
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);
  const travelCost = travelFees[location] || 0;
  const totalPrice = basePrice + addonsPrice + travelCost;

  const handleWhatsappBooking = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });

    const eventObj = EVENT_TYPES.find((e) => e.id === eventType);
    const addonsList = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `¡Hola PIX Cabina Fotográfica! Me gustaría consultar disponibilidad y apartar fecha para mi evento:

🎉 *Tipo de Evento:* ${eventObj ? eventObj.name : eventType}
⏱️ *Duración:* ${hours} Horas de servicio
📍 *Lugar:* ${location}
${approxDate ? `📅 *Fecha aproximada:* ${approxDate}\n` : ''}✨ *Extras seleccionados:* ${addonsList || 'Ninguno'}
💰 *Presupuesto Estimado:* $${totalPrice.toLocaleString('es-MX')} MXN

¿Tienen disponible esta fecha?`;

    window.open(`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 relative bg-pix-card/50 overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-pix-pink/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pix-cyan/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-green/40 text-xs sm:text-sm font-semibold text-pix-green shadow-neon-green">
            <CalcIcon className="w-4 h-4 text-pix-green" />
            <span>Presupuesto Instantáneo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Cotiza tu Cabina en <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-green via-pix-cyan to-pix-pink">30 Segundos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personaliza las horas, ubicación y extras que necesitas para tu fiesta en Tulancingo e Hidalgo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Options (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Event Type */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-pink/20 text-pix-pink flex items-center justify-center text-xs font-mono">1</span>
                <span>¿Qué tipo de evento vas a celebrar?</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {EVENT_TYPES.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => setEventType(e.id)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                      eventType === e.id
                        ? 'border-pix-pink bg-pix-pink/20 text-white shadow-neon-pink'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl">{e.icon}</span>
                    <span className="text-xs font-semibold">{e.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-cyan/20 text-pix-cyan flex items-center justify-center text-xs font-mono">2</span>
                <Clock className="w-4 h-4 text-pix-cyan" />
                <span>¿Cuántas horas de servicio necesitas?</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { h: 2, label: '2 Horas', note: 'Básico' },
                  { h: 3, label: '3 Horas', note: 'Recomendado ⭐' },
                  { h: 4, label: '4 Horas', note: 'VIP' },
                  { h: 5, label: '5 Horas', note: 'Fiesta Total' }
                ].map((item) => (
                  <button
                    key={item.h}
                    type="button"
                    onClick={() => setHours(item.h)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      hours === item.h
                        ? 'border-pix-cyan bg-pix-cyan/20 text-white shadow-neon-cyan'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location & Approx Date */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-violet/20 text-pix-violet flex items-center justify-center text-xs font-mono">3</span>
                <MapPin className="w-4 h-4 text-pix-violet" />
                <span>Ubicación del evento & Fecha</span>
              </label>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 mb-1.5 block">Municipio / Zona:</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pix-dark border border-white/15 text-white text-sm focus:outline-none focus:border-pix-violet"
                  >
                    {Object.keys(travelFees).map((loc) => (
                      <option key={loc} value={loc} className="bg-pix-dark text-white">
                        {loc} {travelFees[loc] === 0 ? '(Sin cargo extra)' : `(+ $${travelFees[loc]})`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 mb-1.5 block">Fecha de tu evento (Opcional):</label>
                  <input
                    type="date"
                    value={approxDate}
                    onChange={(e) => setApproxDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pix-dark border border-white/15 text-white text-sm focus:outline-none focus:border-pix-violet"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Add-ons */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-pix-green/20 text-pix-green flex items-center justify-center text-xs font-mono">4</span>
                <Sparkles className="w-4 h-4 text-pix-green" />
                <span>Servicios y Extras Opcionales</span>
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
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
                        +${addon.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quote Summary Box (Right 5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pix-pink/30 shadow-neon-pink space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-pix-pink/20 text-pix-pink">
                    <CalcIcon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white">Resumen de Cotización</h3>
                </div>
                <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                  PIX Hidalgo
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Cabina Inflable LED ({hours} horas):</span>
                  <span className="font-mono font-bold text-white">${basePrice.toLocaleString('es-MX')}</span>
                </div>

                {selectedAddons.map((id) => {
                  const addon = ADDONS.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between text-xs text-slate-400">
                      <span>+ {addon.name}:</span>
                      <span className="font-mono text-slate-300">${addon.price}</span>
                    </div>
                  );
                })}

                {travelCost > 0 && (
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>+ Viáticos ({location}):</span>
                    <span className="font-mono text-slate-300">${travelCost}</span>
                  </div>
                )}

                <div className="border-t border-white/10 pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Estimado</span>
                    <span className="text-[11px] text-pix-green">Fotos Ilimitadas Incluidas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white text-glow-white">
                      ${totalPrice.toLocaleString('es-MX')}
                    </span>
                    <span className="text-xs text-slate-400 block">MXN</span>
                  </div>
                </div>
              </div>

              {/* Inclusions summary list */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5 text-pix-cyan">
                  <Check className="w-3.5 h-3.5 text-pix-cyan" />
                  <span>Tu servicio incluye siempre:</span>
                </div>
                <p>• Impresión instantánea ilimitada durante las {hours} horas</p>
                <p>• Tiras personalizadas con el diseño de tu evento</p>
                <p>• Mesa con props y accesorios divertidos</p>
                <p>• Operador a cargo para atender a tus invitados</p>
              </div>

              {/* Action WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsappBooking}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-white font-extrabold text-base shadow-neon-pink hover:scale-[1.03] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Apartar Fecha por WhatsApp</span>
              </button>

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

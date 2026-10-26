import React, { useState } from 'react';
import { Sparkles, Palette, Type, Calendar, Download, MessageCircle, RefreshCw, Check, Heart, Crown, GraduationCap, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/content';

export default function StripSimulator() {
  const [eventTitle, setEventTitle] = useState('Mis 15 Allyson');
  const [eventDate, setEventDate] = useState('20 · Diciembre · 2026');
  const [theme, setTheme] = useState('neon'); // 'neon', 'boda', 'xv', 'minimal', 'gold'
  const [frameColor, setFrameColor] = useState('#FFFFFF');
  const [filterStyle, setFilterStyle] = useState('color'); // 'color', 'bw', 'warm'

  const themes = [
    { id: 'neon', name: 'Neón Glow Party', icon: '⚡', bg: '#0F0F18', textColor: '#FF007F', subColor: '#00E5FF' },
    { id: 'boda', name: 'Boda Elegante', icon: '💍', bg: '#FFFFFF', textColor: '#1E293B', subColor: '#B45309' },
    { id: 'xv', name: 'Mis XV Glam', icon: '👑', bg: '#FFF5F8', textColor: '#DB2777', subColor: '#9333EA' },
    { id: 'gold', name: 'Fiesta Dorada', icon: '✨', bg: '#171717', textColor: '#FBBF24', subColor: '#FDE68A' },
    { id: 'minimal', name: 'Minimalista Black', icon: '🖤', bg: '#0A0A0A', textColor: '#FFFFFF', subColor: '#9CA3AF' }
  ];

  const samplePhotos = [
    {
      src: "/images/evento-props-vaquero.jpg",
      caption: "¡Posa con props!"
    },
    {
      src: "/images/evento-boda-novios-props.jpg",
      caption: "¡Novios y fiesta!"
    },
    {
      src: "/images/evento-chicas-tiras.jpg",
      caption: "¡Tiras al instante!"
    }
  ];

  const handleApplyTheme = (selectedTheme) => {
    setTheme(selectedTheme.id);
    setFrameColor(selectedTheme.bg);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const getWhatsappMessage = () => {
    const text = `¡Hola PIX! Estuve probando el simulador de tiras en su página web y me encantó este diseño:
📌 *Título:* ${eventTitle}
📅 *Fecha:* ${eventDate}
🎨 *Estilo:* ${themes.find(t => t.id === theme)?.name || theme}
🖼️ *Filtro:* ${filterStyle === 'bw' ? 'Blanco y Negro Glam' : filterStyle === 'warm' ? 'Cálido Vintage' : 'Color Natural'}

¿Tienen disponible fecha para mi evento en Tulancingo / Hidalgo?`;
    return encodeURIComponent(text);
  };

  return (
    <section id="simulador" className="py-20 md:py-28 relative bg-pix-dark overflow-hidden">
      {/* Background neon lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pix-pink/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pix-purple/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-cyan/40 text-xs sm:text-sm font-semibold text-pix-cyan shadow-neon-cyan">
            <Sparkles className="w-4 h-4 text-pix-cyan" />
            <span>Herramienta Interactiva Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Diseña la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-cyan via-pix-violet to-pix-pink text-glow-pink">Tira de Fotos</span> de tu Evento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personaliza el texto, colores y estilo para ver en tiempo real cómo se verán las tiras impresas de tus invitados.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Form (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Event Title input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Type className="w-4 h-4 text-pix-pink" />
                  <span>Nombre o Título de tu Evento</span>
                </label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Ej: Boda Andrea & Daniel / Mis XV Sofía"
                  maxLength={35}
                  className="w-full px-4 py-3.5 rounded-xl bg-pix-dark/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-pix-pink focus:ring-2 focus:ring-pix-pink/30 transition-all text-base"
                />
              </div>

              {/* Date & Location input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pix-cyan" />
                  <span>Fecha o Subtítulo</span>
                </label>
                <input
                  type="text"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  placeholder="Ej: 20 · 12 · 2026 · Tulancingo, Hgo."
                  maxLength={30}
                  className="w-full px-4 py-3.5 rounded-xl bg-pix-dark/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-pix-cyan focus:ring-2 focus:ring-pix-cyan/30 transition-all text-base"
                />
              </div>

              {/* Theme Preset Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-pix-violet" />
                  <span>Elige un Tema de Diseño</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleApplyTheme(t)}
                      className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        theme === t.id
                          ? 'border-pix-pink bg-pix-pink/15 shadow-neon-pink'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xl mb-1">{t.icon}</span>
                      <span className="text-xs font-bold text-white block">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Filter Style */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200">Efecto / Filtro de Fotos</label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFilterStyle('color')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      filterStyle === 'color'
                        ? 'bg-pix-cyan/20 border-pix-cyan text-white shadow-neon-cyan'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    🎨 Full Color
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterStyle('bw')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      filterStyle === 'bw'
                        ? 'bg-pix-pink/20 border-pix-pink text-white shadow-neon-pink'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    🖤 Glam B&N
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterStyle('warm')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      filterStyle === 'warm'
                        ? 'bg-pix-violet/20 border-pix-violet text-white shadow-neon-purple'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    ✨ Cálido Fiesta
                  </button>
                </div>
              </div>

              {/* WhatsApp direct booking with this design */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${getWhatsappMessage()}`}
                  data-ubicacion="simulador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-white font-extrabold text-base shadow-neon-pink hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>¡Quiero este diseño para mi evento en Hidalgo!</span>
                </a>
                <p className="text-center text-xs text-slate-400 mt-2">
                  Te respondemos al instante con la disponibilidad de tu fecha
                </p>
              </div>

            </div>
          </div>

          {/* Live Preview Strip (Right / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pix-green animate-ping" />
              <span>Vista Previa Impresión (Tira 2x6")</span>
            </div>

            {/* Simulated Printed Photo Strip */}
            <div
              className="w-64 sm:w-72 rounded-xl p-3 shadow-2xl transition-all duration-300 relative border border-white/20 transform hover:rotate-1 hover:scale-105"
              style={{
                backgroundColor: frameColor,
                boxShadow: theme === 'neon' 
                  ? '0 20px 50px rgba(255, 0, 127, 0.35), 0 0 25px rgba(0, 229, 255, 0.25)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              
              {/* Photo 1 */}
              <div className="mb-2.5 rounded-lg overflow-hidden border border-black/10 aspect-[4/3] bg-slate-800 relative group">
                <img
                  src={samplePhotos[0].src}
                  alt="Foto 1"
                  className={`w-full h-full object-cover transition-all ${
                    filterStyle === 'bw' ? 'grayscale contrast-125' : filterStyle === 'warm' ? 'sepia-[0.3] brightness-105' : ''
                  }`}
                />
                <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-mono text-white">#1</div>
              </div>

              {/* Photo 2 */}
              <div className="mb-2.5 rounded-lg overflow-hidden border border-black/10 aspect-[4/3] bg-slate-800 relative group">
                <img
                  src={samplePhotos[1].src}
                  alt="Foto 2"
                  className={`w-full h-full object-cover transition-all ${
                    filterStyle === 'bw' ? 'grayscale contrast-125' : filterStyle === 'warm' ? 'sepia-[0.3] brightness-105' : ''
                  }`}
                />
                <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-mono text-white">#2</div>
              </div>

              {/* Photo 3 */}
              <div className="mb-3 rounded-lg overflow-hidden border border-black/10 aspect-[4/3] bg-slate-800 relative group">
                <img
                  src={samplePhotos[2].src}
                  alt="Foto 3"
                  className={`w-full h-full object-cover transition-all ${
                    filterStyle === 'bw' ? 'grayscale contrast-125' : filterStyle === 'warm' ? 'sepia-[0.3] brightness-105' : ''
                  }`}
                />
                <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-mono text-white">#3</div>
              </div>

              {/* Strip Footer / Branding & Event Custom Text */}
              <div className="pt-2 pb-2 text-center border-t border-black/10 space-y-1">
                <div className="text-base sm:text-lg font-black tracking-tight uppercase"
                     style={{ 
                       color: themes.find(t => t.id === theme)?.textColor || '#FF007F',
                       fontFamily: 'Outfit, sans-serif'
                     }}>
                  {eventTitle || 'Tu Evento Aquí'}
                </div>
                <div className="text-[11px] font-semibold tracking-wider"
                     style={{ color: themes.find(t => t.id === theme)?.subColor || '#00E5FF' }}>
                  {eventDate || 'Fecha del Evento'}
                </div>
                
                {/* PIX mini watermarking logo */}
                <div className="pt-2 flex items-center justify-center gap-1 opacity-75">
                  <img src="/images/logo-pix.png" alt="PIX" className="h-4 w-auto object-contain filter invert" />
                  <span className="text-[9px] tracking-widest uppercase font-mono" style={{ color: themes.find(t => t.id === theme)?.textColor }}>
                    PIX PHOTOBOOTH
                  </span>
                </div>
              </div>

            </div>

            <p className="text-slate-400 text-xs text-center mt-4 max-w-xs">
              💡 Todas nuestras tiras se imprimen en papel fotográfico profesional resistente al agua con secado instantáneo.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

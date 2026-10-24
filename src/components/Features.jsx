import React from 'react';
import { Camera, Sparkles, Wand2, Glasses, QrCode, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-pix-pink" />,
      title: "Impresión al instante",
      description: "Fotos impresas ilimitadas durante el servicio: 2 tiras por toma, en papel fotográfico de secado inmediato.",
      border: "hover:border-pix-pink/50",
      glow: "group-hover:shadow-neon-pink"
    },
    {
      icon: <Wand2 className="w-6 h-6 text-pix-cyan" />,
      title: "Diseño 100% Personalizado",
      description: "Creamos el marco de las tiras según tu invitación, nombres, fecha y la temática de tu evento.",
      border: "hover:border-pix-cyan/50",
      glow: "group-hover:shadow-neon-cyan"
    },
    {
      icon: <Glasses className="w-6 h-6 text-pix-violet" />,
      title: "Mesa de Props & Accesorios",
      description: "Sombreros, lentes gigantes, letreros con frases divertidas, boas y props temáticos para todas las edades.",
      border: "hover:border-pix-purple/50",
      glow: "group-hover:shadow-neon-purple"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pix-green" />,
      title: "Cabina Inflable con Luces LED",
      description: "Estructura moderna e iluminada que luce espectacular en jardines de eventos, salones y terrazas.",
      border: "hover:border-pix-green/50",
      glow: "group-hover:shadow-neon-green"
    },
    {
      icon: <QrCode className="w-6 h-6 text-amber-400" />,
      title: "Descarga digital por QR",
      description: "Tus invitados descargan sus fotos con un código QR. Al final te llevas un USB de regalo con todas las fotos del evento.",
      border: "hover:border-amber-400/50",
      glow: "group-hover:shadow-neon-pink"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "2 operadores durante el evento",
      description: "Dos personas del equipo atienden a tus invitados durante todo el servicio.",
      border: "hover:border-blue-400/50",
      glow: "group-hover:shadow-neon-cyan"
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 relative bg-pix-card/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-cyan/40 text-xs sm:text-sm font-semibold text-pix-cyan shadow-neon-cyan">
            <Sparkles className="w-4 h-4" />
            <span>¿Por qué elegir PIX?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            La Mejor Experiencia para tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-cyan via-pix-purple to-pix-pink text-glow-pink">Invitados</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cuidamos cada detalle visual, técnico y humano para que tu evento sea un éxito rotundo en Tulancingo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`group p-7 rounded-3xl glass-card border border-white/10 ${item.border} ${item.glow} transition-all duration-300 transform hover:-translate-y-1.5`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pix-pink transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Camera, Star, Glasses, Flame, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Hero() {
  const heroPhotos = [
    {
      src: "/images/cabina-inflable.jpg",
      tag: "Montaje Real en Tulancingo",
      badge: "Luz LED",
      label: "Exterior"
    },
    {
      src: "/images/evento-boda-novios-props.jpg",
      tag: "Boda con Props Divertidos",
      badge: "Diversión Total",
      label: "Boda"
    },
    {
      src: "/images/evento-chicas-tiras.jpg",
      tag: "Tiras Impresas en Segundos",
      badge: "Papel Fotográfico HD",
      label: "Tiras"
    },
    {
      src: "/images/evento-cabina-interior-led.jpg",
      tag: "Interior Amplio Iluminado",
      badge: "Mesa de Accesorios",
      label: "Interior LED"
    }
  ];

  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const currentPhoto = heroPhotos[currentPhotoIdx];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[750px] h-[350px] md:h-[500px] bg-gradient-to-tr from-pix-pink/20 via-pix-purple/25 to-pix-cyan/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-pix-pink/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pix-cyan/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-slate-200 shadow-neon-pink">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pix-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pix-pink"></span>
              </span>
              <Sparkles className="w-4 h-4 text-pix-pink" />
              <span>Renta de Cabina de Fotos en Tulancingo, Santiago Tulantepec, Acatlán, Cuautepec y alrededores</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
                Hacemos tu evento{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink via-purple-400 to-pix-cyan text-glow-pink animate-pulse-slow">
                  INOLVIDABLE
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Cabina fotográfica inflable con iluminación LED interior, tiras de fotos impresas al instante con diseño exclusivo y los accesorios más divertidos para tus <strong className="text-white">Bodas, XV Años, Graduaciones y Fiestas</strong>.
              </p>
            </div>

            {/* 4 Key Pillars Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border-white/5 hover:border-pix-cyan/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-pix-cyan/15 flex items-center justify-center text-pix-cyan border border-pix-cyan/30 flex-shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Impresión</p>
                  <p className="text-sm font-bold text-white">Fotos al instante</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border-white/5 hover:border-pix-pink/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-pix-pink/15 flex items-center justify-center text-pix-pink border border-pix-pink/30 flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Personalizado</p>
                  <p className="text-sm font-bold text-white">Diseño de tira único</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border-white/5 hover:border-pix-purple/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-pix-purple/15 flex items-center justify-center text-pix-violet border border-pix-purple/30 flex-shrink-0">
                  <Glasses className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Diversión</p>
                  <p className="text-sm font-bold text-white">Props y accesorios</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border-white/5 hover:border-pix-green/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-pix-green/15 flex items-center justify-center text-pix-green border border-pix-green/30 flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Montaje</p>
                  <p className="text-sm font-bold text-white">Cabina Inflable LED</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Quiero cotizar la cabina de fotos para mi evento en Tulancingo, Santiago Tulantepec, Acatlán, Cuautepec o alrededores.')}`}
                data-ubicacion="hero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pix-pink via-pix-purple to-pix-pink bg-size-200 hover:bg-right font-extrabold text-white text-base shadow-neon-pink hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Cotizar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-semibold text-base border border-pix-cyan/40 hover:border-pix-cyan shadow-neon-cyan transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-pix-cyan" />
                <span>Probar Simulador de Tiras</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-pix-green" />
                <span>Fotos Ilimitadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-pix-green" />
                <span>Aparta con anticipo mínimo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-pix-green" />
                <span>Facturación disponible</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Banner & Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/15 shadow-2xl">
                
                {/* Main Image with smooth transition */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    key={currentPhoto.src}
                    src={currentPhoto.src}
                    alt={currentPhoto.tag}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-fadeIn"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pix-dark via-transparent to-transparent opacity-80" />
                  
                  {/* Badges over photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div className="glass-card px-3 py-1.5 rounded-lg border-pix-cyan/40 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pix-cyan animate-ping" />
                      <span className="text-xs font-bold text-white">{currentPhoto.tag}</span>
                    </div>
                    <div className="glass-card px-3 py-1.5 rounded-lg border-pix-pink/40 text-xs font-bold text-pix-pink whitespace-nowrap">
                      {currentPhoto.badge}
                    </div>
                  </div>
                </div>

                {/* Photo Selector Thumbnails */}
                <div className="p-3 bg-pix-card/95 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 w-full">
                    {heroPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentPhotoIdx(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center border ${
                          currentPhotoIdx === idx
                            ? 'bg-pix-pink/20 border-pix-pink text-white shadow-neon-pink'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {photo.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Banner Strip Below */}
                <div className="p-4 sm:p-5 bg-pix-card/95 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-pix-pink/15 text-pix-pink border border-pix-pink/30 flex-shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Tiras Fotográficas 100% Personalizadas</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Impresión térmica ultra rápida en papel premium</p>
                    </div>
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


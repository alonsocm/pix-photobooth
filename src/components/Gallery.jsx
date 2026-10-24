import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 md:py-28 relative bg-pix-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-violet/40 text-xs sm:text-sm font-semibold text-pix-violet shadow-neon-purple">
            <Camera className="w-4 h-4" />
            <span>Galería de Eventos Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Así se Vive la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-violet via-pix-pink to-pix-cyan text-glow-pink">Experiencia PIX</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Descubre cómo luce nuestra cabina inflable iluminada y el resultado de las tiras impresas.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: 'all', label: 'Todos los Momentos' },
            { id: 'booth', label: 'Cabina Inflable & Montaje' },
            { id: 'strips', label: 'Tiras & Diseños' },
            { id: 'events', label: 'Invitados & Props' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-pix-pink to-pix-purple text-white shadow-neon-pink'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-pix-pink/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-neon-pink"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pix-dark via-pix-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-pix-dark/80 backdrop-blur-md text-pix-cyan border border-pix-cyan/30">
                  {item.badge}
                </span>
              </div>

              {/* Content text */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-pix-pink transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

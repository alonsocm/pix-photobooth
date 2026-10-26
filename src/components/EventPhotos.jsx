import React from 'react';
import { Camera } from 'lucide-react';
import { EVENT_PHOTOS } from '../data/content';

export default function EventPhotos() {
  return (
    <section id="momentos" className="py-20 relative bg-pix-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-pix-pink shadow-neon-pink">
            <Camera className="w-4 h-4 text-pix-pink" />
            <span>Fotos de eventos reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Momentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink to-pix-cyan">reales</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            La cabina, las tiras impresas y los props en eventos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {EVENT_PHOTOS.map((item) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 ${item.frameClass || 'aspect-[4/5] sm:aspect-[4/3]'}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="h-full w-full object-cover"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pix-dark via-pix-dark/80 to-transparent px-3 pb-3 pt-10 text-xs sm:text-sm font-semibold text-white">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

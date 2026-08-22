import React from 'react';
import { Star, Quote, Heart, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Reviews() {
  return (
    <section className="py-20 relative bg-pix-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pix-pink/40 text-xs sm:text-sm font-semibold text-pix-pink shadow-neon-pink">
            <Heart className="w-4 h-4 text-pix-pink" />
            <span>Opiniones de Nuestros Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white">
            Experiencias que Hablan por <span className="text-transparent bg-clip-text bg-gradient-to-r from-pix-pink to-pix-cyan">Nosotros</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Más de 500 eventos inolvidables en Tulancingo y municipios de Hidalgo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-pix-cyan/40 hover:shadow-neon-cyan transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Event Location */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 mt-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pix-pink to-pix-purple flex items-center justify-center font-bold text-white text-base flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-pix-cyan flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{review.event}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

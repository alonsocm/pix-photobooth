import React from 'react';
import { Camera, Heart, MapPin, Phone, MessageCircle, Sparkles, Share2, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-pix-dark border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-pix-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo-pix.png" 
                alt="PIX Cabina Fotográfica" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Cabina fotográfica inflable con iluminación LED y fotos impresas al instante para bodas, XV años, graduaciones y eventos en Tulancingo, Hidalgo.
            </p>
            <div className="pt-2 text-xs font-mono text-pix-pink flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.slogan}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Navegación</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#beneficios" className="hover:text-pix-pink transition-colors">¿Por qué PIX?</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-pix-cyan transition-colors">Simulador de Tiras</a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-pix-violet transition-colors">Paquetes & Precios</a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-pix-green transition-colors">Cotizador en Línea</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-pix-pink transition-colors">Galería de Fotos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pix-cyan transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coverage */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Cobertura Hidalgo</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {BUSINESS_INFO.coverage.map((city, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-pix-cyan flex-shrink-0" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Contacto Directo</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`https://wa.me/52${BUSINESS_INFO.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-pix-green transition-colors"
              >
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">WhatsApp</div>
                  <div className="font-bold">{BUSINESS_INFO.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-pix-cyan transition-colors"
              >
                <div className="p-2 rounded-lg bg-pix-cyan/10 text-pix-cyan border border-pix-cyan/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Llamadas</div>
                  <div className="font-bold">{BUSINESS_INFO.phoneFormatted}</div>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-mono">Horario de atención:</span>
              <span className="text-xs text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 block text-center">
                Lunes a Domingo (9:00 AM - 10:00 PM)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} PIX Cabina Fotográfica. Todos los derechos reservados. Tulancingo, Hidalgo.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-pix-pink fill-pix-pink" />
            <span>para eventos inolvidables</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

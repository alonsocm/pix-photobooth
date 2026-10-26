import React, { useState } from 'react';
import { Camera, Sparkles, Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Simulador de Tira', href: '#simulador' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pix-dark/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/images/logo-pix.png" 
                alt="PIX Cabina Fotográfica" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs tracking-widest text-pix-cyan font-mono uppercase block">Tulancingo y alrededores</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pix-pink after:to-pix-cyan hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Me interesa pedir informes para mi evento.')}`}
              data-ubicacion="navbar"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-full group bg-gradient-to-br from-pix-pink via-pix-purple to-pix-cyan group-hover:from-pix-pink group-hover:to-pix-cyan shadow-neon-pink hover:shadow-neon-cyan transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-pix-dark rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-pix-pink group-hover:text-white transition-colors" />
                <span>Apartar Fecha</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/52${BUSINESS_INFO.phone}`}
              data-ubicacion="navbar-movil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-pix-pink/20 text-pix-pink border border-pix-pink/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-pix-card/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href={`https://wa.me/52${BUSINESS_INFO.phone}?text=${encodeURIComponent('¡Hola PIX! Me interesa consultar disponibilidad para mi evento en Tulancingo, Santiago Tulantepec, Acatlán, Cuautepec o alrededores.')}`}
              data-ubicacion="navbar-movil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-pix-pink to-pix-purple text-white font-bold shadow-neon-pink"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotizar por WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

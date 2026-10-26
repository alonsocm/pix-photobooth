import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloating from './WhatsAppFloating';
import {
  BUSINESS_INFO,
  EXTRA_HOUR,
  PACKAGES,
  SHARED_INCLUSIONS,
  formatMxn,
} from '../data/content';
import { siblingLandings } from '../data/landings';

function whatsappHref(message) {
  return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export default function LandingPage({ page }) {
  const siblings = siblingLandings(page);
  const ubicacion = page.path.slice(1);

  return (
    <div className="min-h-screen bg-pix-dark text-slate-100 flex flex-col selection:bg-pix-pink selection:text-white">
      <Navbar path={page.path} />

      <main className="flex-grow">
        <article>
          <header className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[520px] h-[280px] bg-pix-pink/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
              <p className="text-sm text-slate-400 mb-4">
                <a href="/" className="hover:text-white transition-colors">Inicio</a>
                <span className="mx-2 text-white/30" aria-hidden="true">/</span>
                <span className="text-pix-cyan">{page.eyebrow}</span>
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-pix-pink mb-3">{page.eyebrow}</p>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                {page.h1}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">{page.lead}</p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={whatsappHref(page.whatsappMessage)}
                  data-ubicacion={ubicacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pix-pink via-pix-purple to-pix-cyan text-white font-extrabold shadow-neon-pink hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  {page.cta}
                </a>
                <p className="text-xs text-slate-400">Todos los días, de 9:00 a 22:00.</p>
              </div>
            </div>
          </header>

          <section className="py-12 md:py-16 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">{page.whyTitle}</h2>
              <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {page.why.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 grid sm:grid-cols-3 gap-4">
              {page.photos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-2xl border border-white/10 bg-pix-card">
                  <div className="aspect-[4/3]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      className={`w-full h-full object-cover ${photo.objectPosition ? 'origin-top' : ''}`}
                      style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">Qué incluye</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">{page.includedLead}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
                {SHARED_INCLUSIONS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-pix-cyan" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Los props son sombreros, lentes, máscaras, diademas y muchos más, para todas las edades.
              </p>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">Paquetes y precios</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">{page.packagesLead}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="glass-card rounded-2xl p-5 border border-white/10">
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <p className="mt-2 text-2xl font-extrabold text-pix-cyan">{formatMxn(pkg.price)} MXN</p>
                    <p className="mt-1 text-sm text-slate-300">{pkg.hours} horas de servicio</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                La hora adicional cuesta {formatMxn(EXTRA_HOUR.price)} MXN. Apartas la fecha con $500 MXN de anticipo, por transferencia o efectivo.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{page.travelNote}</p>
              <a
                href={whatsappHref(page.whatsappMessage)}
                data-ubicacion={ubicacion}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-pix-green hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {page.cta}
              </a>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">Preguntas de esta página</h2>
              <div className="mt-6 space-y-4">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="glass-card rounded-2xl p-5 border border-white/10">
                    <h3 className="text-base font-bold text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <nav className="py-12 border-t border-white/5" aria-label="Páginas relacionadas">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-lg font-bold text-white">También en PIX</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li>
                  <a href="/" className="inline-flex px-3 py-1.5 rounded-full border border-white/15 text-sm text-slate-200 hover:border-pix-pink/50 hover:text-white">
                    Inicio
                  </a>
                </li>
                {siblings.map((sibling) => (
                  <li key={sibling.path}>
                    <a href={sibling.path} className="inline-flex px-3 py-1.5 rounded-full border border-white/15 text-sm text-slate-200 hover:border-pix-pink/50 hover:text-white">
                      {sibling.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </article>
      </main>

      <Footer path={page.path} />
      <WhatsAppFloating />
    </div>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StripSimulator from './components/StripSimulator';
import Packages from './components/Packages';
import Calculator from './components/Calculator';
import Gallery from './components/Gallery';
import EventPhotos from './components/EventPhotos';
import Coverage from './components/Coverage';
import FAQ from './components/FAQ';
import WhatsAppFloating from './components/WhatsAppFloating';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-pix-dark text-slate-100 flex flex-col selection:bg-pix-pink selection:text-white">
      {/* Top sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <StripSimulator />
        <Packages />
        <Calculator />
        <Gallery />
        <EventPhotos />
        <Coverage />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <WhatsAppFloating />
    </div>
  );
}

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import SessionTypesSection from './components/SessionTypesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';

export default function LandingPage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <HeroSection />
      <PortfolioSection />
      <SessionTypesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BookingSection />

      <Footer />
    </main>
  );
}
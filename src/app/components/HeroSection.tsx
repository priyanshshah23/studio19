'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const heroSlides = [
{
  src: "https://images.unsplash.com/photo-1488316600491-d3ef986c6506",
  alt: 'Warm natural light portrait of woman in golden hour outdoors, soft bokeh background, intimate atmospheric glow'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1012b6f0e-1771543563018.png",
  alt: 'Family laughing together in soft natural light, warm tones, candid lifestyle moment, airy bright environment'
},
{
  src: "https://images.unsplash.com/photo-1715118878193-211c05580737",
  alt: 'Couple embracing outdoors in dappled forest light, romantic mood, earthy warm tones, cinematic depth'
}];


const sideStats = [
{ label: 'Sessions Completed', value: '500+', icon: '◎' },
{ label: 'Client Satisfaction', value: '98%', icon: '◈' },
{ label: 'Years of Experience', value: '9', icon: '◇' }];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroRevealed(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-border overflow-hidden">
      {/* Carousel Area */}
      <div className="col-span-1 md:col-span-9 relative overflow-hidden min-h-[60vh] md:min-h-screen">
        {/* Slides */}
        {heroSlides.map((slide, i) =>
        <div
          key={i}
          className={`carousel-slide${i === currentSlide ? ' active' : ''}`}>
          
            <AppImage
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            priority={i === 0}
            className="object-cover" />
          
          </div>
        )}

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-primary/10 z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-20 pt-32">
          {/* Eyebrow */}
          <div className={`reveal-active mb-6 ${heroRevealed ? 'reveal-active' : ''}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Seattle, WA · Est. 2017
            </span>
          </div>

          <h1 className={`font-display text-hero-xl font-light leading-[0.9] tracking-tight mb-8 text-primary-foreground ${heroRevealed ? 'reveal-active' : ''}`}>
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content">Portraits.</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-100 italic text-primary-foreground/70">Lifestyle.</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-200">Moments.</span>
            </span>
          </h1>

          <p className={`text-base md:text-lg text-primary-foreground/70 font-light max-w-md leading-relaxed mb-10 reveal-up delay-300 ${heroRevealed ? 'active' : ''}`}>
            We create photographs that feel like you — unhurried, authentic, and made to last.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 reveal-up delay-400 ${heroRevealed ? 'active' : ''}`}>
            <Link
              href="#book"
              className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
              
              Book Your Session
              <span className="w-8 h-px bg-current" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary-foreground/10 transition-colors duration-300">
              
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute top-8 left-8 md:top-32 md:left-16 z-20 opacity-40">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-foreground">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Side Stats Panel */}
      <div className="col-span-1 md:col-span-3 grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 bg-secondary border-t md:border-t-0 md:border-l border-border spotlight-group">
        {sideStats.map((stat, i) =>
        <div
          key={stat.label}
          className={`spotlight-card border-r md:border-r-0 md:border-b border-border last:border-0 p-6 md:p-8 flex flex-col justify-center reveal-up ${
          i === 0 ? '' : i === 1 ? 'delay-100' : 'delay-200'} active`
          }>
          
            <span className="text-2xl text-accent mb-3 block">{stat.icon}</span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-1 block">
              {stat.label}
            </span>
            <span className="font-display text-4xl md:text-5xl font-light text-foreground">
              {stat.value}
            </span>
          </div>
        )}
      </div>
    </section>);

}
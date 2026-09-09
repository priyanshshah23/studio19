'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const portfolioImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fdd127e8-1772073633852.png",
  alt: 'Close portrait of young woman with warm side lighting, soft focus background, natural tones',
  aspect: 'aspect-[4/5]'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1da7b19fe-1772690671456.png",
  alt: 'Family of four walking in sunlit park, candid lifestyle moment, golden afternoon light',
  aspect: 'aspect-[4/5]'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d4eb9c08-1783533378529.png",
  alt: 'Professional male portrait with dramatic side lighting, dark moody background, sharp focus',
  aspect: 'aspect-square'
},
{
  src: "https://images.unsplash.com/photo-1661256665721-0854846ac55f",
  alt: 'Couple sitting together in soft natural light, intimate and relaxed, warm earthy tones',
  aspect: 'aspect-[4/3]'
},
{
  src: "https://images.unsplash.com/photo-1701055448945-fb948dd48ef1",
  alt: 'Mother and child laughing together in bright airy indoor setting, joyful candid moment',
  aspect: 'aspect-[4/5]'
}];


export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef?.current?.querySelectorAll('.reveal-up');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('active');});
      },
      { threshold: 0.1 }
    );
    items?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 flex flex-col justify-end">
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-accent block mb-6 reveal-up">
              Portfolio
            </span>
            <h2 className="font-display text-section-xl font-light tracking-tight leading-[1] reveal-up delay-100">
              Every frame<br />
              <span className="italic text-muted-foreground">tells a story.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg reveal-up delay-200">
              We photograph the real — the laugh before the pose, the quiet between moments, the light that makes ordinary afternoons look like paintings.
            </p>
          </div>
        </div>

        {/* Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left column — tall portrait */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="photo-card reveal-up">
              <div className="aspect-[3/4] overflow-hidden">
                <AppImage
                  src={portfolioImages?.[0]?.src}
                  alt={portfolioImages?.[0]?.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
            <div className="bg-secondary p-8 reveal-up delay-100">
              <h3 className="font-display text-2xl italic font-light mb-3 text-foreground">
                Authentic Moments
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We create a relaxed environment so your personality shines — no stiff poses, just real connection.
              </p>
            </div>
          </div>

          {/* Right column — 2-col sub-grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {/* Top row: family + professional */}
            <div className="photo-card reveal-up delay-100">
              <div className="aspect-[4/5] overflow-hidden">
                <AppImage
                  src={portfolioImages?.[1]?.src}
                  alt={portfolioImages?.[1]?.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
            <div className="photo-card reveal-up delay-200 mt-10">
              <div className="aspect-[4/5] overflow-hidden">
                <AppImage
                  src={portfolioImages?.[2]?.src}
                  alt={portfolioImages?.[2]?.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
            {/* Bottom row: couple + mother */}
            <div className="photo-card reveal-up delay-200">
              <div className="aspect-[4/3] overflow-hidden">
                <AppImage
                  src={portfolioImages?.[3]?.src}
                  alt={portfolioImages?.[3]?.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
            <div className="photo-card reveal-up delay-300">
              <div className="aspect-[4/3] overflow-hidden">
                <AppImage
                  src={portfolioImages?.[4]?.src}
                  alt={portfolioImages?.[4]?.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
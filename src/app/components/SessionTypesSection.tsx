'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Session {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  startingAt: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
}

const sessions: Session[] = [
{
  title: 'Individual Portraits',
  subtitle: 'Just You',
  description: 'Personal portraits for actors, professionals, or anyone wanting a beautiful record of this moment in their life. We find your light.',
  duration: '60 min',
  startingAt: '$295',
  imageSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_16839ac5c-1772073459130.png",
  imageAlt: 'Individual portrait session, woman in warm golden light, confident natural expression',
  tag: 'Most Popular'
},
{
  title: 'Family Sessions',
  subtitle: 'The Whole Crew',
  description: 'Relaxed, fun family sessions that capture how you actually are together — the chaos, the love, the in-between moments.',
  duration: '90 min',
  startingAt: '$395',
  imageSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_18510d85c-1772208575249.png",
  imageAlt: 'Family laughing together outdoors in soft natural light, candid warm moment',
  tag: 'Families'
},
{
  title: 'Couples & Partners',
  subtitle: 'You Two',
  description: 'Engagement, anniversary, or simply celebrating your relationship. We capture the ease and warmth between two people who love each other.',
  duration: '75 min',
  startingAt: '$345',
  imageSrc: "https://images.unsplash.com/photo-1665045065719-faf664bf4ea5",
  imageAlt: 'Couple embracing in forest light, romantic mood, soft natural tones',
  tag: 'Couples'
},
{
  title: 'Lifestyle & Branding',
  subtitle: 'Your Story',
  description: 'Personal branding imagery for entrepreneurs, creatives, and professionals who need photos that tell their story authentically.',
  duration: '2 hours',
  startingAt: '$495',
  imageSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1a092cbb8-1763294932398.png",
  imageAlt: 'Professional woman in bright airy studio setting, confident natural personal branding portrait',
  tag: 'Branding'
}];


export default function SessionTypesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal-up');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('active');});
      },
      { threshold: 0.08 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Spotlight effect
  useEffect(() => {
    const group = sectionRef.current?.querySelector('.spotlight-group') as HTMLElement | null;
    if (!group) return;
    const handleMove = (e: MouseEvent) => {
      const cards = group.querySelectorAll<HTMLElement>('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    group.addEventListener('mousemove', handleMove);
    return () => group.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="sessions" ref={sectionRef} className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-accent block mb-6 reveal-up">
              Sessions
            </span>
            <h2 className="font-display text-section-xl font-light tracking-tight leading-[1] reveal-up delay-100">
              Find your<br />
              <span className="italic text-muted-foreground">perfect session.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-light max-w-sm leading-relaxed reveal-up delay-200">
            Every session includes a pre-shoot consultation, professional editing, and an online gallery for easy ordering.
          </p>
        </div>

        {/* Session Cards Grid — 2×2 */}
        {/* Bento audit: 4 cards, 2-col grid, Row1: [Individual][Family], Row2: [Couples][Lifestyle] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 spotlight-group">
          {sessions.map((session, i) => (
          /* Card: Individual(0), Family(1), Couples(2), Lifestyle(3) */
          <div
            key={session.title}
            className={`spotlight-card group border border-border bg-background hover:border-accent/40 transition-colors duration-500 reveal-up ${
            i === 0 ? '' : i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : 'delay-300'}`
            }>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="photo-card relative overflow-hidden min-h-[240px] sm:min-h-[320px]">
                  <AppImage
                  src={session.imageSrc}
                  alt={session.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover" />
                
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-2 py-1 bg-primary/80 backdrop-blur-sm text-primary-foreground text-[9px] font-semibold tracking-[0.2em] uppercase">
                      {session.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between relative z-10">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent block mb-3">
                      {session.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-light italic mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                      {session.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {session.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                        Starting at
                      </span>
                      <span className="font-display text-2xl font-light text-foreground">
                        {session.startingAt}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                        Duration
                      </span>
                      <span className="text-sm font-medium text-foreground">{session.duration}</span>
                    </div>
                  </div>
                  <Link
                  href="#book"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-accent hover:text-foreground transition-colors">
                  
                    Book This Session
                    <span className="w-6 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>);

}
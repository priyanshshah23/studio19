'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  quote: string;
  name: string;
  sessionType: string;
  avatarSrc: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
{
  quote: "I've never felt comfortable in front of a camera, but the team at Studio 19 made the whole experience so easy. My family portraits came out better than anything I could have imagined.",
  name: 'Jennifer Calloway',
  sessionType: 'Family Session',
  avatarSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_165985a9a-1769081688826.png",
  avatarAlt: 'Jennifer Calloway, smiling woman, satisfied Studio 19 client'
},
{
  quote: "The branding photos I got from Studio 19 completely transformed my online presence. My clients comment on them constantly. Worth every penny and then some.",
  name: 'Marcus Webb',
  sessionType: 'Lifestyle & Branding',
  avatarSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1f78172f1-1763292798313.png",
  avatarAlt: 'Marcus Webb, professional man, satisfied Studio 19 branding client'
},
{
  quote: "We booked a couples session for our anniversary and it was one of the best decisions we made. The photos are on our wall now and we look at them every single day.",
  name: 'Priya & Aiden Sharma',
  sessionType: 'Couples Session',
  avatarSrc: "https://images.unsplash.com/photo-1734251385381-d3e9be40c29c",
  avatarAlt: 'Couple smiling together, warm natural lighting, Studio 19 clients'
}];


export default function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-accent block mb-6 reveal-up">
            Client Stories
          </span>
          <h2 className="font-display text-section-xl font-light tracking-tight italic reveal-up delay-100">
            What clients say.
          </h2>
        </div>

        {/* Testimonial Cards — 3-col spotlight group */}
        {/* Bento audit: 3 cards, 3-col. Row1: [T1][T2][T3]. Placed 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 spotlight-group">
          {testimonials.map((t, i) =>
          <div
            key={t.name}
            className={`spotlight-card border border-border bg-background p-8 flex flex-col justify-between min-h-[320px] reveal-up ${
            i === 0 ? '' : i === 1 ? 'delay-100' : 'delay-200'}`
            }>
            
              <div className="relative z-10">
                <div className="font-display text-5xl text-accent/30 italic leading-none mb-6 select-none">
                  &ldquo;
                </div>
                <p className="font-display text-lg font-light italic leading-relaxed text-foreground mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-border">
                  <AppImage
                  src={t.avatarSrc}
                  alt={t.avatarAlt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">
                    {t.sessionType}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
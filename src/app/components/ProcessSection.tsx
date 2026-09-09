'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const steps = [
{
  number: '01',
  title: 'Book & Consult',
  description: 'Choose your session type and pick a date. We\'ll send a short questionnaire and schedule a 15-minute call to talk about your vision, wardrobe, and what feels most like you.'
},
{
  number: '02',
  title: 'Your Session',
  description: 'Arrive at the studio or chosen location. We guide you through every pose — you\'ll forget the camera is there. Most clients say it\'s more fun than they expected.'
},
{
  number: '03',
  title: 'Receive Your Gallery',
  description: 'Within 2 weeks you\'ll receive a private online gallery of fully edited images. Download your favorites, order prints, or share with family — it\'s all there.'
}];


export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef?.current?.querySelectorAll('.reveal-up');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('active');});
      },
      { threshold: 0.08 }
    );
    items?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Rotated image + badge */}
          <div className="relative reveal-up">
            <div className="rotate-card shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1eb1729c7-1773027427294.png"
                  alt="Photographer setting up a portrait session in warm studio lighting, behind the scenes creative atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full" />
                
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-36 h-36 md:w-44 md:h-44 bg-primary text-primary-foreground flex items-center justify-center p-6 rotate-[5deg] shadow-xl">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-center leading-loose text-primary-foreground/80">
                Galleries delivered in 14 days.
              </p>
            </div>
          </div>

          {/* Right: Steps */}
          <div>
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-accent block mb-6 reveal-up">
              How It Works
            </span>
            <h2 className="font-display text-section-lg font-light tracking-tight mb-14 leading-[1.05] reveal-up delay-100">
              Simple from<br />
              <span className="italic text-muted-foreground">start to finish.</span>
            </h2>

            <div className="space-y-10">
              {steps?.map((step, i) =>
              <div
                key={step?.number}
                className={`flex gap-6 items-start reveal-up delay-${(i + 2) * 100}`}>
                
                  <span className="step-number flex-shrink-0">{step?.number}</span>
                  <div className="pt-2">
                    <h4 className="font-semibold text-base tracking-wide text-foreground mb-2 uppercase text-[11px] tracking-[0.2em]">
                      {step?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>);

}
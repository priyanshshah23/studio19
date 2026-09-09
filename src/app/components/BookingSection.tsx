'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    message: '',
  });

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal-up');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); });
      },
      { threshold: 0.08 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point — replace with real booking API
    setSubmitted(true);
  };

  return (
    <section id="book" ref={sectionRef} className="border-t border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        {/* Left: Headline */}
        <div className="p-12 md:p-20 bg-primary flex flex-col justify-between reveal-up">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-accent block mb-8">
              Book a Session
            </span>
            <h2 className="font-display text-section-lg font-light text-primary-foreground leading-[1.05] mb-6">
              Let&apos;s make<br />
              <span className="italic text-primary-foreground/60">something beautiful.</span>
            </h2>
            <p className="text-base text-primary-foreground/60 font-light leading-relaxed max-w-sm">
              Sessions book up 2–3 weeks in advance. Fill out the form and we&apos;ll confirm your date within 24 hours.
            </p>
          </div>

          {/* Studio info */}
          <div className="mt-12 space-y-4">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/40 block mb-1">Studio Location</span>
              <p className="text-sm font-light text-primary-foreground/70">1924 Eastlake Ave E, Seattle, WA 98102</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/40 block mb-1">Hours</span>
              <p className="text-sm font-light text-primary-foreground/70">Tue–Sat · 9am – 6pm</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/40 block mb-1">Email</span>
              <a href="mailto:hello@studio19seattle.com" className="text-sm font-light text-accent hover:text-primary-foreground transition-colors">
                hello@studio19seattle.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 md:p-20 flex flex-col justify-center reveal-up delay-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="font-display text-6xl text-accent italic mb-6">✓</div>
              <h3 className="font-display text-3xl font-light italic mb-4 text-foreground">
                Request received!
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We&apos;ll review your request and confirm your booking within 24 hours. Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="booking-input font-display text-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="booking-input"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(206) 555-0100"
                    className="booking-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Session Type
                </label>
                <select
                  name="sessionType"
                  value={form.sessionType}
                  onChange={handleChange}
                  required
                  className="booking-select"
                >
                  <option value="" disabled>Select a session...</option>
                  <option value="individual">Individual Portraits — from $295</option>
                  <option value="family">Family Session — from $395</option>
                  <option value="couples">Couples &amp; Partners — from $345</option>
                  <option value="lifestyle">Lifestyle &amp; Branding — from $495</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="booking-input"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Anything else?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Tell us about your vision, who's in the session, any questions..."
                  className="booking-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-between border border-foreground bg-transparent text-foreground px-8 py-5 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <span>Request Your Session</span>
                <span className="w-8 h-px bg-current" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
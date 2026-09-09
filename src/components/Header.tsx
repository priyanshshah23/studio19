'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Sessions', href: '#sessions' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border' :'py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <AppLogo size={36} />
            <span className="font-display text-xl font-light tracking-tight text-foreground hidden sm:block">
              Studio 19
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="nav-underline text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="#book"
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 hover:bg-accent transition-colors duration-300"
            >
              Book a Session
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-foreground" />
              <span className="block w-6 h-px bg-foreground" />
              <span className="block w-4 h-px bg-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-[60] flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-primary-foreground text-3xl leading-none"
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="flex flex-col gap-10 text-center">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light italic text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex justify-center items-center text-[11px] font-semibold tracking-[0.25em] uppercase border border-primary-foreground/30 text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </>
  );
}
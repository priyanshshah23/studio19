import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <AppLogo size={32} />
            <span className="font-display text-lg font-light tracking-tight text-foreground">
              Studio 19
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-light">
            Portraits &amp; Lifestyle Photography · Seattle, WA
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <Link href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="#sessions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sessions
          </Link>
          <Link href="#book" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Book
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2026 Studio 19
        </p>
      </div>
    </footer>
  );
}
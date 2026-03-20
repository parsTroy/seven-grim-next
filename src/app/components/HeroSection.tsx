'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-gaming">
      {/* Grid overlay */}
      <div className="hero-grid" />
      {/* Ambient glows */}
      <div className="hero-glow-left" />
      <div className="hero-glow-right" />

      {/* Gradient fade to games section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Studio label */}
        <p className="section-label animate-fade-in mb-8" style={{ animationDelay: '0.1s' }}>
          Independent Game Studio
        </p>

        {/* Logo image */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/7Grim-logo-nobg.png"
            alt="7Grim Studio"
            width={220}
            height={110}
            className="opacity-90"
            priority
          />
        </div>

        {/* Studio name */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-gradient animate-fade-in-up mb-4" style={{ animationDelay: '0.3s' }}>
          7GRIM
        </h1>

        {/* Tagline */}
        <p className="font-body text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
          We forge worlds from darkness. Three games in development — survival horror, open-world MMORPG, and a roguelike card game. All built from scratch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
          <Link href="#games" className="btn-primary text-sm px-10 py-4">
            Explore Games
          </Link>
          <Link href="/studio" className="btn-secondary text-sm px-10 py-4">
            About the Studio
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="flex flex-col items-center text-neutral-700 gap-2">
            <span className="font-caption text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-neutral-700 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

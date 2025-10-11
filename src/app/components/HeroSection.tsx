'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-gaming relative pt-24 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="animate-fade-in-up">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 text-gradient">
            7GRIM
          </h1>
          
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-neutral-200 mb-6 animate-slide-in-left">
              GAME STUDIO
            </h2>
            <p className="font-body text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
              Creating immersive gaming experiences through innovative technology and compelling storytelling.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link href="#games" className="btn-primary text-lg px-8 py-4">
            View Games
          </Link>
          <Link href="#studio" className="btn-secondary text-lg px-8 py-4">
            About Us
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center text-neutral-500">
            <span className="font-caption text-sm mb-3 tracking-wider">SCROLL DOWN</span>
            <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

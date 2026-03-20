'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    { name: 'GRIMTIDE',   href: '/games/grimtide',   genre: 'Co-op Survival' },
    { name: 'IRONHAVEN',  href: '/games/ironhaven',  genre: 'MMORPG' },
    { name: 'GRIMBLIND',  href: '/games/grimblind',  genre: 'Roguelike Poker' },
  ];

  return (
    <nav className={`nav-gaming fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Logo
              variant="full"
              height={isScrolled ? 28 : 34}
              className="transition-all duration-300 opacity-90 group-hover:opacity-100"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Games dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1.5">
                Games
                <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-all duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <div className="glass-effect rounded-lg py-2 shadow-2xl">
                  {games.map((game) => (
                    <Link
                      key={game.name}
                      href={game.href}
                      className="flex items-center justify-between px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="font-gaming text-xs">{game.name}</span>
                      <span className="text-neutral-600 text-xs">{game.genre}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/studio" className="nav-link">Studio</Link>
            <Link href="/faq"    className="nav-link">FAQ</Link>

            {/* Discord CTA */}
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600/30 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.88 19.88 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-400 hover:text-white p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}/>
              <span className={`block h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect rounded-lg p-4 space-y-1">
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-gaming text-xs">{game.name}</span>
                <span className="text-neutral-600 text-xs">{game.genre}</span>
              </Link>
            ))}
            <hr className="divider my-2"/>
            <Link href="/studio" className="block px-3 py-2.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Studio</Link>
            <Link href="/faq"    className="block px-3 py-2.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

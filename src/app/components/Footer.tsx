'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo height={46} className="mb-5 opacity-85" />
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-6">
              Independent game studio building worlds from darkness. Three titles in active development.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/EarthDeparture"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/8 text-neutral-400 hover:text-white hover:bg-white/8 transition-all text-xs font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-gaming text-xs text-white tracking-widest mb-5">GAMES</h3>
            <ul className="space-y-3">
              {[
                { name: 'GRIMTIDE',   href: '/games/grimtide',  sub: 'Co-op Survival' },
                { name: 'IRONHAVEN',  href: '/games/ironhaven', sub: 'MMORPG' },
                { name: 'GRIMBLIND',  href: '/games/grimblind', sub: 'Roguelike Poker' },
              ].map((g) => (
                <li key={g.name}>
                  <Link href={g.href} className="group flex flex-col">
                    <span className="text-neutral-400 group-hover:text-white transition-colors text-sm font-medium">{g.name}</span>
                    <span className="text-neutral-600 text-xs">{g.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h3 className="font-gaming text-xs text-white tracking-widest mb-5">STUDIO</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us',  href: '/studio' },
                { name: 'FAQ',       href: '/faq' },
                { name: 'Support',   href: '/support' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="divider mb-8"/>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            © {year} 7Grim Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Cookie Policy', href: '/cookies' },
            ].map((l) => (
              <Link key={l.name} href={l.href} className="text-neutral-600 hover:text-neutral-400 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

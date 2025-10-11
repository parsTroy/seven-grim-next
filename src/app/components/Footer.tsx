'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    games: [
      { name: 'Cards of Fate', href: '/games/cards-of-fate' }
    ],
    studio: [
      { name: 'About Us', href: '/studio' }
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="7Grim Studio"
                width={120}
                height={60}
                className="mb-4"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionary game studio crafting immersive worlds where cutting-edge 
              technology meets compelling storytelling. Pushing the boundaries of 
              interactive entertainment.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-gaming text-lg text-gradient mb-4">GAMES</h3>
            <ul className="space-y-2">
              {footerLinks.games.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-gaming text-lg text-gradient mb-4">STUDIO</h3>
            <ul className="space-y-2">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 7Grim Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

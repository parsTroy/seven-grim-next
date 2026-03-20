'use client';

import React from 'react';
import Image from 'next/image';

const stats = [
  { label: 'Games in Development', value: '3' },
  { label: 'Years Active',          value: '4' },
  { label: 'Team Members',          value: '5+' },
  { label: 'Game Engines',          value: '3' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'INNOVATION',
    body: 'We build from scratch. Every system, every mechanic — designed intentionally, not assembled from defaults.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'CRAFT',
    body: 'Games are craft, not product. We sweat the details that players feel but can\'t name — the ones that make something memorable.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'COMMUNITY',
    body: 'Small team, big ambition. We build openly, share progress, and shape our games alongside the players who will play them.',
  },
];

const StudioInfo = () => {
  return (
    <section id="studio" className="py-24 bg-gradient-to-b from-black to-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">The Studio</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-white">
              ABOUT<br />7GRIM STUDIO
            </h2>
            <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
              Founded to build games we actually wanted to play. Based in the indie underground — no publisher pressure, no feature creep. Just three worlds taking shape.
            </p>
          </div>
          <hr className="divider mt-8"/>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="card-gaming text-center py-8">
              <div className="font-display text-4xl md:text-5xl text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission + logo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-white mb-6">
              OUR MISSION
            </h3>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                At 7Grim Studio, we believe the best games come from small teams with genuine obsession — not roadmaps and committee decisions. We build the games we couldn&#39;t stop thinking about.
              </p>
              <p>
                Every title we ship will be different. A co-op zombie survival, a persistent MMORPG, a roguelike card game. What ties them together is a commitment to systems that feel good, worlds worth exploring, and gameplay that respects the player&#39;s time.
              </p>
            </div>
          </div>
          <div className="card-gaming p-0 overflow-hidden">
            <div className="relative h-72 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
              <Image
                src="/7Grim-logo-nobg.png"
                alt="7Grim Studio"
                width={240}
                height={120}
                className="opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-heading text-2xl md:text-3xl text-white mb-10">
            OUR VALUES
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-gaming">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                  {v.icon}
                </div>
                <h4 className="font-gaming text-sm text-white mb-3 tracking-wider">{v.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudioInfo;

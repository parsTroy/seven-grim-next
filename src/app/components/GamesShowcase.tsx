'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const games = [
  {
    slug:        'grimtide',
    title:       'GRIMTIDE',
    tagline:     'The dead rise in waves. Will you hold the line?',
    genre:       'Co-op Survival',
    engine:      'Godot 4',
    players:     '1–4 Co-op',
    platforms:   'PC · Mac · Linux · Web',
    status:      'In Development',
    description: 'Wave-based cooperative zombie survival inspired by the classic Call of Duty Zombies mode. Hold your ground, spend your points, and fight back the relentless tide of undead.',
    features:    ['Wave-based progression', 'Points economy & wall buys', 'Perk system', 'Multiplayer co-op'],
    art:         '/game-grimtide.svg',
    accentColor: '#8b0000',
    glowColor:   'rgba(139,0,0,0.15)',
  },
  {
    slug:        'ironhaven',
    title:       'IRONHAVEN',
    tagline:     'A world worth coming back to.',
    genre:       'MMORPG',
    engine:      'Java 21 + LibGDX',
    players:     'Massively Multiplayer',
    platforms:   'PC',
    status:      'In Development',
    description: 'An Old School RuneScape-inspired MMORPG built from the ground up. Isometric 2D world, tick-based combat, deep skill systems, and a persistent living world to explore with others.',
    features:    ['Tick-based game loop', 'Isometric 2D world', 'Quests & NPCs', 'Crafting & skills'],
    art:         '/game-ironhaven.svg',
    accentColor: '#c8a230',
    glowColor:   'rgba(200,162,48,0.12)',
  },
  {
    slug:        'grimblind',
    title:       'GRIMBLIND',
    tagline:     'Face the blind. Defy the odds. Bet it all.',
    genre:       'Roguelike Poker',
    engine:      'LÖVE2D (Lua)',
    players:     'Single Player',
    platforms:   'PC · Mac · Linux',
    status:      'In Development',
    description: 'A Balatro-inspired roguelike built on Texas Hold\'em. Play hands against the Blind, chain Jokers, level up hand types with Planet cards, and survive increasingly brutal Boss Blinds.',
    features:    ['Texas Hold\'em scoring', 'Joker modifier system', 'Planet card upgrades', 'Boss Blind mechanics'],
    art:         '/game-grimblind.svg',
    accentColor: '#6600cc',
    glowColor:   'rgba(102,0,204,0.15)',
  },
];

const GamesShowcase = () => {
  return (
    <section id="games" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-4">Our Titles</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl text-white">
              GAMES IN<br />DEVELOPMENT
            </h2>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Three original titles, each built from scratch by a small driven team.
            </p>
          </div>
          <hr className="divider mt-8"/>
        </div>

        {/* Games grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link key={game.slug} href={`/games/${game.slug}`} className="game-card group block">
              {/* Art */}
              <div className="game-card-art">
                <Image
                  src={game.art}
                  alt={`${game.title} concept art`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  unoptimized
                />
                {/* Tinted overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at center, ${game.glowColor}, transparent 70%)` }}
                />
                {/* Gradient fade to card info */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
              </div>

              {/* Info */}
              <div className="game-card-info">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="game-card-badge badge-status">{game.status}</span>
                  <span className="game-card-badge badge-genre">{game.genre}</span>
                </div>

                <h3 className="font-gaming text-xl text-white mb-2 tracking-wide">
                  {game.title}
                </h3>
                <p className="text-neutral-500 text-xs italic mb-3 leading-relaxed">
                  {game.tagline}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {game.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600 mb-5">
                  <span>{game.engine}</span>
                  <span className="text-neutral-700">·</span>
                  <span>{game.players}</span>
                  <span className="text-neutral-700">·</span>
                  <span>{game.platforms}</span>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {game.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: game.accentColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="btn-game text-xs">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;

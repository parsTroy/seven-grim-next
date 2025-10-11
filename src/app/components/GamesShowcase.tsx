'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GamesShowcase = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      id: 1,
      title: "CARDS OF FATE",
      genre: "Card Game Roguelike",
      status: "In Development",
      description: "A strategic card game that combines deck-building mechanics with roguelike progression. Players will discover unique cards, build powerful combinations, and face increasingly challenging encounters in this innovative take on the card game genre.",
      features: ["Deck Building Mechanics", "Roguelike Progression", "Strategic Gameplay", "Unique Card Combinations"],
      image: "/image1.png",
      releaseDate: "TBA 2026"
    }
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-gaming text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
            UPCOMING RELEASE
          </h2>
          <p className="font-gaming-light text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re currently developing our debut title. Stay tuned for updates 
            on our innovative card game experience.
          </p>
        </div>

        {/* Game Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Game Image */}
          <div className="relative">
            <div className="card-gaming p-0 overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={games[0].image}
                  alt={games[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-gaming uppercase">
                    {games[0].status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-gaming-light">
                    {games[0].releaseDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-gaming text-3xl md:text-4xl text-gradient mb-2">
                {games[0].title}
              </h3>
              <p className="font-gaming-light text-xl text-gray-400 mb-4">
                {games[0].genre}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {games[0].description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-gaming text-lg text-gradient mb-4">KEY FEATURES</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {games[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-300 font-gaming-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/games/cards-of-fate" className="btn-primary">
                Learn More
              </Link>
              <button className="btn-secondary">
                Follow Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;

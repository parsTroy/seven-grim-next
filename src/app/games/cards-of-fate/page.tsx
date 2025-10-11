import type { Metadata } from "next";
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Cards of Fate - 7Grim Studio",
  description: "A strategic card game that combines deck-building mechanics with roguelike progression.",
};

export default function CardsOfFate() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Concept Art */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image1.png"
            alt="Cards of Fate Concept Art"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-gradient mb-6">
            CARDS OF FATE
          </h1>
          <p className="font-body text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            A strategic card game that combines deck-building mechanics with roguelike progression.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-gaming text-3xl text-gradient mb-6">GAME OVERVIEW</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cards of Fate is an innovative card game that challenges players to build powerful 
                decks through strategic decision-making. Each run offers unique opportunities to 
                discover new cards and create devastating combinations.
              </p>
              <p>
                The game features a roguelike progression system where each playthrough is different. 
                Players must adapt their strategies, manage resources carefully, and make tough 
                choices that will determine their success.
              </p>
            </div>
          </div>
          <div className="card-gaming p-0 overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/image2.png"
                alt="Cards of Fate Game Environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Concept Art Gallery */}
        <section className="mb-16">
          <h2 className="font-heading text-4xl text-gradient mb-8 text-center">CONCEPT ART</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-gaming p-0 overflow-hidden group">
              <div className="relative aspect-square">
                <Image
                  src="/image3.png"
                  alt="Cards of Fate Concept Art 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="card-gaming p-0 overflow-hidden group">
              <div className="relative aspect-square">
                <Image
                  src="/image4.png"
                  alt="Cards of Fate Concept Art 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="card-gaming p-0 overflow-hidden group">
              <div className="relative aspect-square">
                <Image
                  src="/image5.png"
                  alt="Cards of Fate Concept Art 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-gaming">
            <h3 className="font-gaming text-xl text-gradient mb-4">KEY FEATURES</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <span className="text-gray-300">Deck Building Mechanics</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <span className="text-gray-300">Roguelike Progression</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <span className="text-gray-300">Strategic Gameplay</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <span className="text-gray-300">Unique Card Combinations</span>
              </li>
            </ul>
          </div>
          <div className="card-gaming">
            <h3 className="font-gaming text-xl text-gradient mb-4">GAME DETAILS</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Genre:</span>
                <span className="text-gray-300">Card Game Roguelike</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-gray-300">PC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Release:</span>
                <span className="text-gray-300">TBA 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-orange-500">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

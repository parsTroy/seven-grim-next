'use client';

import React from 'react';
import Image from 'next/image';

const StudioInfo = () => {
  const stats = [
    { label: "Game in Development", value: "1", suffix: "" },
    { label: "Years Experience", value: "2", suffix: "+" },
    { label: "Team Members", value: "5", suffix: "+" },
    { label: "Technologies", value: "8", suffix: "+" }
  ];

  return (
    <section id="studio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-gaming text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
            ABOUT 7GRIM STUDIO
          </h2>
          <p className="font-gaming-light text-xl text-gray-400 max-w-4xl mx-auto">
            Founded in 2022, 7Grim Studio is a game development company dedicated to creating 
            innovative gaming experiences. We combine cutting-edge technology with compelling 
            storytelling to deliver memorable games.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card-gaming">
                <div className="font-gaming text-4xl md:text-5xl text-gradient mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-gaming-light text-gray-400 uppercase text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-gaming text-3xl md:text-4xl text-gradient mb-6">
              OUR MISSION
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                At 7Grim Studio, we believe games are powerful mediums for storytelling and 
                entertainment. Our mission is to create experiences that engage players and 
                push the boundaries of what&apos;s possible in interactive media.
              </p>
              <p>
                We&apos;re committed to delivering high-quality games that combine innovative 
                gameplay mechanics with compelling narratives, ensuring each project meets 
                our standards for excellence.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="card-gaming p-0 overflow-hidden">
              <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/logo.png"
                  alt="7Grim Studio Mission"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="font-gaming text-3xl md:text-4xl text-gradient mb-12">
            OUR VALUES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gaming">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-gaming text-xl text-gradient mb-3">INNOVATION</h4>
              <p className="text-gray-400">
                We constantly explore new technologies and creative approaches to game development.
              </p>
            </div>
            <div className="card-gaming">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-gaming text-xl text-gradient mb-3">QUALITY</h4>
              <p className="text-gray-400">
                Every detail matters. We strive for excellence in every aspect of our games.
              </p>
            </div>
            <div className="card-gaming">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-gaming text-xl text-gradient mb-3">COLLABORATION</h4>
              <p className="text-gray-400">
                Great games come from great teams working together toward a shared vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioInfo;

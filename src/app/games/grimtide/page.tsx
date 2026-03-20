import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'GRIMTIDE — 7Grim Studio',
  description: 'Wave-based co-op zombie survival. Hold the line against endless tides of undead in GRIMTIDE by 7Grim Studio.',
};

const FeatureIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5";
  const icons: Record<string, React.ReactNode> = {
    wave: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 15c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0M3 9c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
      </svg>
    ),
    coin: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v10M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 3-5 3-5 5.5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5"/>
      </svg>
    ),
    flask: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3h6M9 3v7l-4 8a2 2 0 001.8 2.9h10.4A2 2 0 0019 18l-4-8V3"/>
        <line x1="8" y1="14" x2="16" y2="14" strokeWidth={1.5} strokeLinecap="round"/>
      </svg>
    ),
    gun: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12h12l2-4h2v4h1a1 1 0 010 2h-1v2h-2l-2-2H3a1 1 0 010-2z"/>
        <circle cx="8" cy="17" r="1.5" strokeWidth={1.5}/>
        <line x1="19" y1="8" x2="21" y2="8" strokeWidth={1.5} strokeLinecap="round"/>
      </svg>
    ),
    people: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    map: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="2" x2="8" y2="18" strokeWidth={1.5} strokeLinecap="round"/>
        <line x1="16" y1="6" x2="16" y2="22" strokeWidth={1.5} strokeLinecap="round"/>
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

const features = [
  { icon: 'wave',   label: 'Wave Progression',   desc: 'Escalating rounds with increasing enemy density, speed, and variant types.' },
  { icon: 'coin',   label: 'Points Economy',       desc: 'Kill enemies to earn points. Spend them on wall buys, perks, and map expansion.' },
  { icon: 'flask',  label: 'Perk System',          desc: 'Classic perk machines — Jugger-Nog, Speed Cola, and more — scattered across the map.' },
  { icon: 'gun',    label: 'Weapon Arsenal',        desc: 'Wall-mounted weapons, the Mystery Box, and Pack-a-Punch upgrades await.' },
  { icon: 'people', label: '4-Player Co-op',        desc: 'Survive solo or team up with up to three others in full cooperative multiplayer.' },
  { icon: 'map',    label: 'Map Progression',       desc: 'Unlock new areas, activate power, and discover secrets hidden across the map.' },
];

export default function GrimtidePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/game-grimtide.svg" alt="GRIMTIDE concept art" fill className="object-cover" unoptimized priority/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
          <Link href="/#games" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-300 text-xs uppercase tracking-wider mb-8 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            All Games
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="game-card-badge badge-status">In Development</span>
            <span className="game-card-badge badge-genre">Co-op Survival</span>
            <span className="game-card-badge badge-genre">Godot 4</span>
            <span className="game-card-badge badge-genre">TBA 2026</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white mb-5">GRIMTIDE</h1>
          <p className="text-neutral-300 text-xl md:text-2xl max-w-xl leading-relaxed italic">
            &ldquo;The dead rise in waves. Will you hold the line?&rdquo;
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Overview */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <p className="section-label mb-5">Overview</p>
            <div className="space-y-4 text-neutral-400 leading-relaxed text-base">
              <p>
                GRIMTIDE is a wave-based cooperative zombie survival game inspired by the classic
                Call of Duty: World at War Nazi Zombies mode. Face down an endless, escalating tide
                of undead — and die trying.
              </p>
              <p>
                The core loop is tight: kill zombies, earn points, spend them on weapons and perks,
                unlock new parts of the map, and push deeper into each round. Every decision matters —
                which wall buy, which perk first, where to hold position.
              </p>
              <p>
                Built in Godot 4 with a full 3D environment, GRIMTIDE supports up to four players
                in cooperative multiplayer on PC, Mac, Linux, and Web.
              </p>
            </div>
          </div>
          <div className="card-gaming h-fit">
            <h3 className="font-gaming text-xs text-white tracking-widest mb-5">GAME DETAILS</h3>
            <dl className="space-y-4">
              {[
                ['Genre',    'Co-op Wave Survival'],
                ['Engine',   'Godot 4.6.1'],
                ['Language', 'GDScript'],
                ['Players',  '1–4 Co-op'],
                ['Platform', 'PC · Mac · Linux · Web'],
                ['Status',   'In Development'],
                ['Release',  'TBA 2026'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-neutral-600 text-sm flex-shrink-0">{k}</dt>
                  <dd className="text-neutral-300 text-sm text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <p className="section-label mb-5">Features</p>
          <h2 className="font-heading text-3xl text-white mb-10">KEY FEATURES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.label} className="card-gaming">
                <div className="w-10 h-10 rounded-lg bg-red-900/20 border border-red-900/30 flex items-center justify-center text-red-500 mb-4">
                  <FeatureIcon type={f.icon}/>
                </div>
                <h4 className="font-gaming text-xs text-white tracking-wider mb-2">{f.label}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dev status */}
        <div className="card-gaming mb-20">
          <p className="section-label mb-4">Development Status</p>
          <h2 className="font-heading text-2xl text-white mb-6">CURRENT PROGRESS</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Core game loop structure', done: true  },
              { label: 'Player FPS controller',    done: false },
              { label: 'Basic zombie AI',           done: false },
              { label: 'Wave spawning logic',       done: false },
              { label: 'Points system',             done: false },
              { label: 'Single room prototype',     done: false },
              { label: 'Multiplayer support',       done: false },
              { label: 'Perk system',               done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                  item.done ? 'bg-green-600/25 border-green-500/40 text-green-400' : 'border-neutral-700'
                }`}>
                  {item.done && (
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${item.done ? 'text-neutral-300' : 'text-neutral-600'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="https://github.com/EarthDeparture/deadtide" target="_blank" rel="noopener noreferrer" className="btn-primary">View on GitHub</a>
          <Link href="/#games" className="btn-secondary">Back to Games</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

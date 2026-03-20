import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'IRONHAVEN — 7Grim Studio',
  description: 'An Old School RuneScape-inspired MMORPG built from the ground up. Isometric 2D, tick-based, persistent world.',
};

const FeatureIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5";
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5}/>
        <polyline points="12,6 12,12 16,14" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    grid: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" strokeWidth={1.5} rx="1"/>
        <rect x="14" y="3" width="7" height="7" strokeWidth={1.5} rx="1"/>
        <rect x="3" y="14" width="7" height="7" strokeWidth={1.5} rx="1"/>
        <rect x="14" y="14" width="7" height="7" strokeWidth={1.5} rx="1"/>
      </svg>
    ),
    scroll: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6M9 16h6M9 8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    hammer: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4L19.1 3.3a1 1 0 00-1.4 0L14.7 6.3zM3 21l9-9"/>
      </svg>
    ),
    globe: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5}/>
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    exchange: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="17,1 21,5 17,9" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 11V9a4 4 0 014-4h14"/>
        <polyline points="7,23 3,19 7,15" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

const features = [
  { icon: 'clock',    label: 'Tick-Based Combat',    desc: 'A 256-tick server loop modeled after OSRS — precise, skill-based, and deeply satisfying.' },
  { icon: 'grid',     label: 'Isometric 2D World',   desc: 'Classic LibGDX rendering with a hand-crafted tile world built for exploration.' },
  { icon: 'scroll',   label: 'Quests & NPCs',         desc: 'Dialogue-driven quests, NPC factions, and a world full of secrets to uncover.' },
  { icon: 'hammer',   label: 'Skills & Crafting',     desc: 'Multi-skill progression system — mining, smithing, fishing, magic, and more.' },
  { icon: 'globe',    label: 'Persistent World',      desc: 'A live server with real-time world state synchronization via Protocol Buffers + Netty.' },
  { icon: 'exchange', label: 'Player Economy',         desc: 'Trading, crafting, and resource-based economy driven entirely by player interaction.' },
];

export default function IronhavenPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/game-ironhaven.svg" alt="IRONHAVEN concept art" fill className="object-cover" unoptimized priority/>
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
            <span className="game-card-badge badge-genre">MMORPG</span>
            <span className="game-card-badge badge-genre">Java 21 + LibGDX</span>
            <span className="game-card-badge badge-genre">TBA</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white mb-5">IRONHAVEN</h1>
          <p className="text-neutral-300 text-xl md:text-2xl max-w-xl leading-relaxed italic">
            &ldquo;A world worth coming back to.&rdquo;
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
                IRONHAVEN is an Old School RuneScape-inspired MMORPG built entirely in Java 21.
                Not a mod, not a clone — a ground-up reimagining of the tick-based, isometric 2D
                MMORPG formula that defined a generation of online gaming.
              </p>
              <p>
                The architecture is serious: a custom 256-tick game loop server built with Netty,
                Protocol Buffers for network serialization, and LibGDX handling the client-side
                isometric rendering. Designed to handle real persistent world state from day one.
              </p>
              <p>
                IRONHAVEN takes the best of OSRS — meaningful skill progression, rewarding exploration,
                player-driven economy — and builds a new world around those principles.
              </p>
            </div>
          </div>
          <div className="card-gaming h-fit">
            <h3 className="font-gaming text-xs text-white tracking-widest mb-5">GAME DETAILS</h3>
            <dl className="space-y-4">
              {[
                ['Genre',      'MMORPG'],
                ['Language',   'Java 21'],
                ['Networking', 'Netty 4 + Protobuf'],
                ['Client',     'LibGDX 1.13'],
                ['Tick Rate',  '256 ticks/sec'],
                ['Players',    'Massively Multiplayer'],
                ['Platform',   'PC'],
                ['Status',     'Foundation Phase'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-neutral-600 text-sm flex-shrink-0">{k}</dt>
                  <dd className="text-neutral-300 text-sm text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Tech stack */}
        <div className="card-gaming mb-16">
          <p className="section-label mb-4">Architecture</p>
          <h2 className="font-heading text-2xl text-white mb-6">TECHNICAL STACK</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { layer: 'Language',      tech: 'Java 21+' },
              { layer: 'Networking',    tech: 'Netty 4.1' },
              { layer: 'Serialization', tech: 'Protocol Buffers 3' },
              { layer: 'Client',        tech: 'LibGDX 1.13' },
              { layer: 'Game Loop',     tech: '256-tick server' },
              { layer: 'Config/Data',   tech: 'YAML / Jackson' },
              { layer: 'Build',         tech: 'Maven 3.8' },
              { layer: 'Rendering',     tech: 'Isometric 2D' },
            ].map((t) => (
              <div key={t.layer} className="flex flex-col gap-1 p-3 rounded-md bg-white/3 border border-white/5">
                <div className="text-neutral-600 text-xs">{t.layer}</div>
                <div className="text-neutral-200 text-sm font-medium">{t.tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <p className="section-label mb-5">Features</p>
          <h2 className="font-heading text-3xl text-white mb-10">KEY FEATURES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.label} className="card-gaming">
                <div className="w-10 h-10 rounded-lg bg-yellow-900/20 border border-yellow-800/30 flex items-center justify-center text-yellow-600 mb-4">
                  <FeatureIcon type={f.icon}/>
                </div>
                <h4 className="font-gaming text-xs text-white tracking-wider mb-2">{f.label}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="https://github.com/EarthDeparture/osrs-mmorp" target="_blank" rel="noopener noreferrer" className="btn-primary">View on GitHub</a>
          <Link href="/#games" className="btn-secondary">Back to Games</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

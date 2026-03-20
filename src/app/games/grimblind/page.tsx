import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'GRIMBLIND — 7Grim Studio',
  description: 'A Balatro-inspired roguelike poker game. Face the blind, chain Jokers, and defy the odds in GRIMBLIND by 7Grim Studio.',
};

const FeatureIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5";
  const icons: Record<string, React.ReactNode> = {
    card: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="14" height="18" rx="2" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 7h6M6 11h6M6 15h4"/>
        <rect x="8" y="7" width="14" height="18" rx="2" strokeWidth={1.5} fill="none"/>
      </svg>
    ),
    star: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    planet: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" strokeWidth={1.5}/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" strokeWidth={1.5} transform="rotate(-30, 12, 12)"/>
      </svg>
    ),
    shield: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <line x1="12" y1="8" x2="12" y2="12" strokeWidth={1.5} strokeLinecap="round"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    multiply: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <line x1="6" y1="6" x2="18" y2="18" strokeWidth={1.5} strokeLinecap="round"/>
        <line x1="18" y1="6" x2="6" y2="18" strokeWidth={1.5} strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9" strokeWidth={1.5}/>
      </svg>
    ),
    refresh: (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="23,4 23,10 17,10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="1,20 1,14 7,14" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

const features = [
  { icon: 'card',     label: "Texas Hold'em Core",  desc: "Community cards (Pre-Flop → Flop → Turn → River) form the scoring foundation each hand." },
  { icon: 'star',     label: '15 Unique Jokers',     desc: 'Common, Uncommon, and Rare Jokers add flat Chips, flat Mult, or xMult multipliers to every score.' },
  { icon: 'planet',   label: '9 Planet Cards',        desc: "Level up specific hand types — each level adds +15 Chips and +1 Mult to that hand's base values." },
  { icon: 'shield',   label: 'Boss Blinds',           desc: 'Every third Blind is a Boss with brutal modifiers: no discards, higher targets, reduced hand size.' },
  { icon: 'multiply', label: 'Chips x Mult Scoring',  desc: 'The core scoring formula: (Base Chips + Card Chips) x Mult x xMult. Chain synergies to multiply madness.' },
  { icon: 'refresh',  label: 'Roguelike Loop',         desc: 'Beat three Blinds per Ante, visit the Shop between each, and survive all five Antes to win the run.' },
];

const hands = [
  ['High Card',       '5',   '1'],
  ['One Pair',        '10',  '2'],
  ['Two Pair',        '20',  '2'],
  ['Three of a Kind', '30',  '3'],
  ['Straight',        '30',  '4'],
  ['Flush',           '35',  '4'],
  ['Full House',      '40',  '4'],
  ['Four of a Kind',  '60',  '7'],
  ['Straight Flush',  '100', '8'],
  ['Royal Flush',     '100', '8'],
];

export default function GrimblindPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/game-grimblind.svg" alt="GRIMBLIND concept art" fill className="object-cover" unoptimized priority/>
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
            <span className="game-card-badge badge-genre">Roguelike Poker</span>
            <span className="game-card-badge badge-genre">LOVE2D (Lua)</span>
            <span className="game-card-badge badge-genre">Single Player</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white mb-5">GRIMBLIND</h1>
          <p className="text-neutral-300 text-xl md:text-2xl max-w-xl leading-relaxed italic">
            &ldquo;Face the blind. Defy the odds. Bet it all.&rdquo;
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
                GRIMBLIND is a single-player roguelike built on the Texas Hold&apos;em poker framework.
                Inspired by Balatro, it trades cards against a chip target — the Blind — instead of
                against opponents. Score enough chips to beat the Blind, visit the Shop, and prepare
                for the next, harder one.
              </p>
              <p>
                The scoring formula is deceptively deep:{' '}
                <strong className="text-neutral-300">(Base Chips + Card Chips) &times; Mult &times; xMult</strong>.
                Stack Jokers that add flat multipliers, chain Planet cards to level up hand types,
                and watch numbers spiral into the hundreds of thousands.
              </p>
              <p>
                Built in LÖVE2D (Lua) with a full animation engine, card flip effects, real-time
                hand evaluation, and a polished UI. The complete game loop is already implemented.
              </p>
            </div>
          </div>
          <div className="card-gaming h-fit">
            <h3 className="font-gaming text-xs text-white tracking-widest mb-5">GAME DETAILS</h3>
            <dl className="space-y-4">
              {[
                ['Genre',    'Roguelike / Card Game'],
                ['Engine',   'LÖVE2D 11.4+'],
                ['Language', 'Lua'],
                ['Players',  'Single Player'],
                ['Platform', 'PC · Mac · Linux'],
                ['Hands',    '4 plays per Blind'],
                ['Discards', '3 per Blind'],
                ['Antes',    '5 Antes to win'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-neutral-600 text-sm flex-shrink-0">{k}</dt>
                  <dd className="text-neutral-300 text-sm text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Hand table */}
        <div className="card-gaming mb-16">
          <p className="section-label mb-4">Scoring Reference</p>
          <h2 className="font-heading text-2xl text-white mb-6">HAND RANKINGS</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-neutral-600 text-xs uppercase tracking-wider border-b border-white/5">
                  <th className="text-left py-3 pr-6 font-medium">Hand</th>
                  <th className="text-right py-3 pr-6 font-medium">Base Chips</th>
                  <th className="text-right py-3 font-medium">Base Mult</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {hands.map(([hand, chips, mult]) => (
                  <tr key={hand} className="text-neutral-400 hover:text-neutral-200 transition-colors">
                    <td className="py-3 pr-6">{hand}</td>
                    <td className="text-right py-3 pr-6 font-mono text-neutral-300">{chips}</td>
                    <td className="text-right py-3 font-mono text-purple-400">&times;{mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <p className="section-label mb-5">Features</p>
          <h2 className="font-heading text-3xl text-white mb-10">KEY FEATURES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.label} className="card-gaming">
                <div className="w-10 h-10 rounded-lg bg-purple-900/20 border border-purple-800/30 flex items-center justify-center text-purple-400 mb-4">
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
          <h2 className="font-heading text-2xl text-white mb-6">WHAT&apos;S DONE</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Full Balatro-style game loop',
              "Chips x Mult scoring with xMult",
              "Texas Hold'em community card flow",
              '15 Jokers (Common / Uncommon / Rare)',
              '9 Planet cards (hand upgrades)',
              'Boss Blind modifiers (3 variants)',
              'Card flip + deal pop-in animations',
              'Real-time hand preview on select',
              'Score flash on scored cards',
              'Screen shake + flash impact FX',
              'Score log (last 4 plays)',
              'Joker tooltip on hover',
            ].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm border border-green-500/40 bg-green-600/25 flex-shrink-0 flex items-center justify-center text-green-400">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-sm text-neutral-300">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="https://github.com/EarthDeparture/balatro" target="_blank" rel="noopener noreferrer" className="btn-primary">View on GitHub</a>
          <Link href="/#games" className="btn-secondary">Back to Games</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

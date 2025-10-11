import type { Metadata } from "next";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import GamesShowcase from './components/GamesShowcase';
import StudioInfo from './components/StudioInfo';
import Footer from './components/Footer';
import { constructMetaData } from '@/lib/utils';

export const metadata: Metadata = constructMetaData({
  title: "7Grim Studio | Professional Game Development",
  description: "7Grim Studio is a professional game development company creating innovative gaming experiences. Currently developing Cards of Fate, a strategic card game roguelike.",
  image: "/logo.png"
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <GamesShowcase />
      <StudioInfo />
      <Footer />
    </main>
  );
}

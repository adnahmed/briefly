'use client'
import { AIBrainChip } from "./components/AIBrainChip";
import { BentoSquare } from "./components/Bento";
import { HeroGetStarted } from "./components/Hero";
import PlayButton from "./components/PlayButton";
export default function Home() {
  return <main>

    <AIBrainChip/>
    {/* <BentoSquare type="brief" />
    <BentoSquare type="analytic" />
    <BentoSquare type="management" /> */}
  </main>;
}

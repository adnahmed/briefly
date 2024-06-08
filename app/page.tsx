'use client'
import { BentoSquare } from "./components/Bento";
export default function Home() {
  return <main>
    <BentoSquare type="brief" />
    <BentoSquare type="analytic" />
    <BentoSquare type="management" />
    <BentoSquare type="marketplace" />
  </main>;
}

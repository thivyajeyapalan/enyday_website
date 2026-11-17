import { Footer } from "@/components/Footer";
import { Gloss } from "@/components/Gloss";
import { Hero, Ticker } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Science } from "@/components/Science";
import { Story } from "@/components/Story";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cobalt focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Story />
        <Science />
        <Gloss />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

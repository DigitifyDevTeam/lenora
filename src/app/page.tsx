import { JsonLd } from "@/components/json-ld";
import { Audience, WhyLenora, Zones } from "@/components/sections/commercial";
import { Hero, TownMarquee } from "@/components/sections/hero";
import { About, Pillars, Reassurance } from "@/components/sections/intro";
import { GuestExperience, Housekeeping, OnlinePresence } from "@/components/sections/services";
import { Faq, FinalCta, Testimonials } from "@/components/sections/trust";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main id="contenu">
        <Hero />
        <TownMarquee />
        <Reassurance />
        <About />
        <Pillars />
        <OnlinePresence />
        <GuestExperience />
        <Housekeeping />
        <WhyLenora />
        <Audience />
        <Zones />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}

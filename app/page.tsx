import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technology } from "@/components/sections/Technology";
import { Founder } from "@/components/sections/Founder";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Technology />
      <Founder />
      <CTAFinal />
    </>
  );
}

import HeroSection from "./components/HeroSection";
import { HowWeWork } from "./components/howWeWork/HowWeWork";

import { ServicesSection } from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <HowWeWork />
    </main>
  );
}

import HeroSection from "./components/HeroSection";
import { HowWeWork } from "./components/howWeWork/HowWeWork";
import { ProjectsSection } from "./components/ourProjects/ProjectsSection";

import { ServicesSection } from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <HowWeWork />
      <ProjectsSection />
    </main>
  );
}

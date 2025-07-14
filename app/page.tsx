import HeroSection from "./components/HeroSection";
import { HowWeWork } from "./components/howWeWork/HowWeWork";
import { ProjectsSection } from "./components/ourProjects/ProjectsSection";

import { ServicesSection } from "./components/ServiceSection";
import TechStack from "./components/techStack/TechStack";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <HowWeWork />
      <TechStack />
      <ProjectsSection />
    </main>
  );
}

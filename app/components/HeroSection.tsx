import Image from "next/image";
import { HeroContent } from "./HeroContent";
import StatsCards from "./StatsCards";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="bg-black">
      <div className="flex flex-col relative min-h-[1024px] w-full pb-[105px] max-md:max-w-full max-md:pb-[100px]">
        <img
          src="/Assets/home page/hero bg image.png"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
        />
        <Navbar />
        <div className="relative flex mb-[-21px] min-h-[919px] w-full flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <HeroContent />
          </div>
          <StatsCards />
        </div>
      </div>
    </div>
  );
}

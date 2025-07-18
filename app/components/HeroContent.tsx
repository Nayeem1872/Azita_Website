import React from "react";

interface HeroContentProps {
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ className = "" }) => {
  return (
    <main
      className={`self-center flex w-[1240px] max-w-full flex-col items-stretch justify-center mt-[147px] max-md:mt-10 ${className}`}
    >
      <section className="flex w-full flex-col items-stretch text-white text-center justify-center max-md:max-w-full">
        <h1 className="text-[48px] sm:text-[80px] font-bold leading-[110px] max-md:max-w-full max-md:text-[40px] max-md:leading-[61px]">
          Elevate Your Brand with High-Impact Digital Products
        </h1>
        <p className="text-[16px] sm:text-2xl font-normal leading-[29px] mt-10 max-md:max-w-full">
          We craft beautiful, scalable web and mobile solutions designed for
          startups, businesses, and visionary founders — using the latest
          technology, driven by purpose.
        </p>
      </section>

      <div className="self-center flex items-center gap-3 sm:gap-5 text-[16px] sm:text-xl font-bold leading-none justify-center mt-20 max-md:flex max-md:mt-10">
        <button className="bg-white self-stretch flex min-h-14 items-center text-[rgba(25,24,30,1)] justify-center my-auto px-[24px] py-[16px] sm:px-[60px] sm:py-[18px] rounded-[30px] max-md:px-5 hover:bg-gray-100 transition-colors">
          <span className="self-stretch my-auto">See projects</span>
        </button>

        {/* The "min-w-60" class has been removed from this button */}
        <button className="border self-stretch flex min-h-14 items-center cursor-pointer text-white justify-center my-auto px-[24px] py-[16px]  sm:px-[60px] sm:py-[18px] rounded-[30px] border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
          <span className="self-stretch my-auto">Discuss a project</span>
        </button>
      </div>
    </main>
  );
};

import * as React from "react";
import { ServiceButton } from "@/components/ServiceButton";

const serviceItems = (
  <>
    <div className="flex flex-col justify-center items-start p-10 h-[600px] w-[450px] shrink-0 bg-[#DEE6EC] rounded-2xl">
      <h3 className="text-[#424242] text-5xl font-normal leading-[57.6px]">
        Mobile App
      </h3>
      <p className="mt-4 text-[#424242] text-base font-normal leading-6">
        From idea to App Store, we build native and cross-platform apps
        optimized for performance, usability, and growth.
      </p>
      <ServiceButton
        variant="secondary"
        size="large"
        className="border-black text-black mt-8"
        aria-label="Learn more about Mobile App development"
      >
        Learn more
      </ServiceButton>
    </div>

    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/472276dd04ac278e14665294460baaf8ac093097?width=800"
      alt="Mobile app finance screen on an iPhone"
      className="h-[600px] w-auto shrink-0 rounded-2xl"
      loading="lazy"
    />

    <div className="flex flex-col gap-6 h-[600px] w-[400px] shrink-0">
      <div className="flex-1 flex flex-col justify-center p-8 bg-[#DEE6EC] rounded-2xl">
        <h4 className="text-3xl font-medium text-green-900 leading-tight">
          Take out a cash loan while BTC value is up
        </h4>
        <button className="mt-6 flex items-center justify-between w-[150px] text-left text-black bg-lime-300 font-semibold py-3 px-4 rounded-full">
          Learn Now <span>+</span>
        </button>
      </div>
      <div className="flex-1 bg-[#DEE6EC] rounded-2xl overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a138981f1b623d386c6596b44304899c15b09f4277c688874d1a586e92f58ad?placeholderIfAbsent=true"
          alt="Abstract 3D icon"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div className="flex flex-col justify-center items-start p-10 h-[600px] w-[450px] shrink-0 bg-[#E6F0D9] rounded-2xl">
      <h3 className="text-[#424242] text-5xl font-normal leading-[57.6px]">
        Software Development
      </h3>
      <p className="mt-4 text-[#424242] text-base font-normal leading-6">
        We build tailored software tools — from internal systems to public
        platforms — with the functionality and flexibility your business needs
        to grow.
      </p>
      <ServiceButton
        variant="secondary"
        size="large"
        className="border-black text-black mt-8"
        aria-label="Learn more about Software Development"
      >
        Learn more
      </ServiceButton>
    </div>
  </>
);

export const ServicesSection: React.FC = () => {
  return (
    <section
      className="flex w-full flex-col justify-between items-start bg-white pt-20 pb-[58px] max-md:pt-[60px] max-md:pb-10"
      aria-labelledby="services-heading"
      role="main"
    >
      <div className="flex flex-col items-start gap-10 w-full">
        <header className="flex flex-col items-start gap-4 w-full max-w-[1440px] mx-auto pl-[100px] pr-5 max-md:pl-[50px] max-sm:gap-3 max-sm:pl-5">
          <h1
            id="services-heading"
            className="text-[#3C3C3C] text-8xl font-normal leading-[120px] max-md:text-7xl max-sm:text-5xl"
          >
            Our Services
          </h1>
          <p className="text-[#3C3C3C] text-xl font-normal leading-[31px] max-md:text-lg max-sm:text-base">
            Elevate your brand with innovative design, seamless development, and
            strategic digital solutions.
          </p>
        </header>

        <div
          className="w-full mt-10 overflow-hidden"
          role="region"
          aria-label="Services showcase"
        >
          <div className="flex gap-6 animate-scroll">
            {serviceItems}
            {serviceItems}
          </div>
        </div>
      </div>
    </section>
  );
};

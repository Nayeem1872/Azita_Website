import React from "react";
import { Card } from "./ServiceCard";
import { IntroSection } from "./IntroSection";

const processSteps = [
  {
    number: "01",
    title: "Research",
    description:
      "Understanding user needs, market trends, and business goals to build a strong foundation.",
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 0L49.4281 30.5719L80 40L49.4281 49.4281L40 80L30.5719 49.4281L0 40L30.5719 30.5719L40 0Z" fill="#F0F0F0"/></svg>`,
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Defining the vision through ideation, wireframes, and strategy alignment.",
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 80C37.3611 80 34.9306 79.3404 32.7083 78.0208C30.5556 76.7708 28.8194 75.0696 27.5 72.9168C26.25 70.6944 25.625 68.264 25.625 65.6248C25.625 62.2916 26.3889 59.514 27.9167 57.2916C29.4444 55.0696 31.8056 52.4652 35 49.4792C37.3611 47.3264 38.5417 45.2776 38.5417 43.3332V41.4584H36.6667C34.5139 41.4584 31.5625 43.6112 27.8125 47.9168C24.132 52.2224 19.6528 54.3748 14.375 54.3748C11.7361 54.3748 9.30556 53.75 7.08332 52.5C4.93056 51.1804 3.19444 49.4444 1.875 47.2916C0.625 45.0696 0 42.6388 0 40C0 37.3611 0.625 34.9653 1.875 32.8125C3.19444 30.5903 4.93056 28.8542 7.08332 27.6042C9.30556 26.2847 11.7361 25.625 14.375 25.625C19.5833 25.625 24.0278 27.743 27.7083 31.9792C31.3889 36.2153 34.375 38.3333 36.6667 38.3333H38.5417V36.6667C38.5417 34.7222 37.3611 32.6736 35 30.5208L32.6042 28.3333C30.868 26.7361 29.2708 24.8264 27.8125 22.6042C26.3542 20.3125 25.625 17.5694 25.625 14.375C25.625 11.7361 26.25 9.34028 27.5 7.18752C28.8194 4.96528 30.5556 3.22917 32.7083 1.97916C34.9306 0.65972 37.3611 0 40 0C42.6388 0 45.0348 0.65972 47.1876 1.97916C49.4096 3.29861 51.146 5.03472 52.396 7.18752C53.7152 9.34028 54.3748 11.7361 54.3748 14.375C54.3748 19.5833 52.2568 24.0278 48.0208 27.7083C43.7848 31.3889 41.6668 34.375 41.6668 36.6667V38.3333H43.3332C45.6944 38.3333 48.6804 36.2153 52.2916 31.9792C55.8332 27.743 60.2776 25.625 65.6252 25.625C68.264 25.625 70.6596 26.2847 72.8124 27.6042C75.0348 28.8542 76.7708 30.5556 78.0208 32.7083C79.3404 34.8611 80 37.2917 80 40C80 42.6388 79.3404 45.0696 78.0208 47.2916C76.7708 49.4444 75.0348 51.1804 72.8124 52.5C70.6596 53.75 68.264 54.3748 65.6252 54.3748C62.3612 54.3748 59.5488 53.5764 57.1876 51.9792C54.896 50.382 52.3264 48.0556 49.4792 45C47.3264 42.6388 45.2776 41.4584 43.3332 41.4584H41.6668V43.3332C41.6668 45.9028 43.7848 48.8888 48.0208 52.2916C52.2568 55.6944 54.3748 60.1388 54.3748 65.6248C54.3748 68.264 53.7152 70.6944 52.396 72.9168C51.146 75.0696 49.4444 76.7708 47.2916 78.0208C45.1388 79.3404 42.7084 80 40 80Z" fill="#F0F0F0"/></svg>`,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting intuitive, aesthetically pleasing, and user-centered experiences.",
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 0H80V20V60L60 80V20H0L20 0ZM0 66.0268V40H26.0268L0 66.0268ZM40 80H14.3111L40 54.3112V80Z" fill="#F0F0F0"/></svg>`,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Bringing designs to life with seamless functionality and performance.",
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.2187 71.5144L30.2185 71.5148L25.1645 66.4608C25.1874 66.7708 25.199 67.084 25.199 67.4C25.199 74.3588 19.5578 80 12.599 80C5.64022 80 -0.000976562 74.3588 -0.000976562 67.4C-0.000976562 60.4412 5.64022 54.8 12.599 54.8C12.915 54.8 13.2282 54.8116 13.5383 54.8344L8.3441 49.6404L8.34518 49.6392C3.18241 44.3724 -0.000976562 37.1579 -0.000976562 29.2C-0.000976562 13.0733 13.0723 0 29.199 0C37.1569 0 44.3714 3.18338 49.6382 8.34616L49.639 8.3452L49.7954 8.50128C49.8294 8.53536 49.8638 8.56956 49.8978 8.6038L54.8334 13.5396C54.8106 13.2294 54.799 12.916 54.799 12.6C54.799 5.6412 60.4402 0 67.399 0C74.3578 0 79.999 5.6412 79.999 12.6C79.999 19.5588 74.3578 25.2 67.399 25.2C67.083 25.2 66.7698 25.1884 66.4594 25.1655L71.3958 30.1019C71.4298 30.1356 71.4634 30.1694 71.497 30.2032L71.5134 30.2196C76.7582 35.4984 79.999 42.7708 79.999 50.8C79.999 66.9268 66.9258 80 50.799 80C42.7698 80 35.4975 76.7592 30.2187 71.5144Z" fill="#F0F0F0"/></svg>`,
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <>
      <section
        className="flex w-full  flex-col  bg-gradient-to-b from-white to-[#6a696e] items-start gap-16 box-border mx-auto my-0 px-[100px] py-20 max-md:gap-12 max-md:px-10 max-md:py-[60px] max-sm:gap-8 max-sm:px-5 max-sm:py-10"
        aria-labelledby="how-we-work-title"
      >
        <header className="flex w-full max-w-[1440px] flex-col items-start gap-4">
          <h1
            id="how-we-work-title"
            className="w-full text-[#3C3C3C] text-8xl font-normal leading-[120px] max-md:text-7xl max-sm:text-5xl"
          >
            How We Work
          </h1>
          <p className="w-full text-[#3C3C3C] text-xl font-normal leading-[31px] max-md:text-lg max-sm:text-base">
            We combine creativity, strategy, and technology to deliver
            exceptional digital experiences—tailored to your brand's needs.
          </p>
        </header>

        <div
          className="flex items-center gap-8 w-full max-md:flex-col max-md:gap-6 max-sm:gap-4 "
          role="group"
          aria-label="Our work process"
        >
          {processSteps.map((step) => (
            <Card
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </section>
      <IntroSection />
    </>
  );
};

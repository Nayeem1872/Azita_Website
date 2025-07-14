import React from "react";

const teamImages = ["/Assets/home page/text recatangle.png"];

export const IntroSection: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-40  box-border bg-gradient-to-b from-[#6a696e] to-black"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-[1220px] text-start">
        <h1
          id="intro-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight md:leading-snug text-white"
        >
          <span>
            AZITA Studio is a creative design agency with a top-tier team of{" "}
          </span>
          <span className="text-transparent [-webkit-text-stroke:1px_#F0F0F0] font-normal">
            talented and dedicated designers
          </span>{" "}
          <div className="inline-flex items-center align-middle bg-white/20 backdrop-blur-sm rounded-full p-2 mx-2 -mb-2 sm:-mb-1">
            <img
              className="w-full md:h-16 rounded-full object-cover  -ml-4 md:-ml-6 first:ml-0"
              src="/Assets/home page/text recatangle.png"
              alt={`Team member`}
            />
          </div>
          <span>committed to delivering designs.</span>
        </h1>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-2 grid-rows-2 w-12 h-12 gap-2">
            <div className="col-start-2 row-start-1 bg-gray-600"></div>
            <div className="col-start-1 row-start-2 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

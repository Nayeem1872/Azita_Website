import React from "react";

const teamImages = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const IntroSection: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-40 px-5 box-border bg-gradient-to-b from-[#6a696e] to-black"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-6xl text-center">
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
            {teamImages.map((src, index) => (
              <img
                key={index}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-800 -ml-4 md:-ml-6 first:ml-0"
                src={src}
                alt={`Team member ${index + 1}`}
              />
            ))}
          </div>
          <span>committed to delivering exceptional designs.</span>
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

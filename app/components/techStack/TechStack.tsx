import TechSphere from "./TechSphere";

const TechStack = () => {
  return (
    // Added text-white and padding for better presentation on a black background
    <div className="bg-black text-white py-16">
      <section className="flex w-full flex-col items-center justify-center max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Tech Stack
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl">
          A collection of the primary technologies, languages, and frameworks I
          work with to build modern, scalable web applications.
        </p>

        {/*
          Here's the new component.
          It's wrapped in a div to ensure it centers correctly.
          The TechSphere component itself will handle the image and the floating icons.
        */}
        <div className="w-full flex justify-center">
          <TechSphere />
        </div>
      </section>
    </div>
  );
};

export default TechStack;

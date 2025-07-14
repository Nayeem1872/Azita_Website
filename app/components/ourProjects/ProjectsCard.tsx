import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isWhiteText?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  isWhiteText = false,
  className = "",
}) => {
  const textColorClass = isWhiteText ? "text-white" : "text-[rgba(60,60,60,1)]";
  const borderColorClass = isWhiteText
    ? "border-white"
    : "border-[rgba(60,60,60,1)]";

  return (
    <article
      className={`flex flex-col relative min-h-[1021px] grow pt-[100px] pb-[721px] px-20 max-md:max-w-full max-md:mt-[30px] max-md:pb-[100px] max-md:px-5 ${className}`}
    >
      <img
        src={imageUrl}
        alt={`${title} project showcase`}
        className="absolute h-full w-full object-cover inset-0"
      />
      <div
        className={`relative flex w-[479px] max-w-full flex-col items-stretch ${textColorClass}`}
      >
        <header className="min-h-[104px] w-full max-md:max-w-full">
          <h2 className="text-5xl font-medium leading-[1.2] max-md:text-[40px]">
            {title}
          </h2>
          <p className="text-2xl font-normal mt-2 max-md:max-w-full">
            {description}
          </p>
        </header>
        <button
          className={`border flex items-center gap-4 text-base font-normal mt-10 px-[30px] py-4 rounded-[60px] border-solid max-md:px-5 transition-all duration-300 hover:bg-opacity-10 hover:bg-current focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50 ${borderColorClass}`}
          aria-label={`Learn more about ${title} project`}
        >
          <span className="self-stretch my-auto">Learn more</span>
        </button>
      </div>
    </article>
  );
};

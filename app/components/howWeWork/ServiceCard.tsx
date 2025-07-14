import React from "react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const Card: React.FC<CardProps> = ({
  number,
  title,
  description,
  icon,
}) => {
  return (
    <article
      className="flex-1 min-w-[280px] h-[424px] bg-[#212121] rounded-[32px] p-6 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
      role="article"
      aria-labelledby={`step-${number}-title`}
    >
      <div
        className="absolute -top-16 -left-4 text-white/100 font-bold text-[160px] leading-none z-0"
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="pt-[130px] pb-6"
          dangerouslySetInnerHTML={{ __html: icon }}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2">
          <h3
            id={`step-${number}-title`}
            className="w-full text-[#F0F0F0] text-3xl font-bold leading-9"
          >
            {title}
          </h3>
          <p className="w-full text-[#C8C8C8] text-base font-normal leading-6">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

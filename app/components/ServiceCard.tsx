import * as React from "react";
import { ServiceButton } from "@/components/ServiceButton";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  textColor: string;
  buttonBorderColor: string;
  buttonTextColor: string;
  number: string;
  opacity?: number;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  backgroundColor,
  textColor,
  buttonBorderColor,
  buttonTextColor,
  number,
  opacity = 1,
  className = "",
}) => {
  const cardStyle = opacity !== 1 ? { opacity } : {};

  return (
    <article
      className={`flex w-[1172px] justify-between items-center relative max-md:w-full max-md:max-w-[800px] max-md:flex-col max-sm:max-w-full ${className}`}
      style={{ backgroundColor, ...cardStyle }}
      role="article"
      aria-labelledby={`service-title-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="flex w-[371px] h-[607px] flex-col justify-center items-start gap-10 shrink-0 pl-10 pr-[39px] pt-[185px] pb-[180px] max-md:w-full max-md:h-auto max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
        <header className="flex flex-col items-start gap-4 w-full max-md:gap-3">
          <h3
            id={`service-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="w-full text-5xl font-normal leading-[57.6px] max-md:text-4xl max-sm:text-[28px]"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="w-full text-base font-normal leading-6 max-md:text-sm max-sm:text-sm"
            style={{ color: textColor }}
          >
            {description}
          </p>
        </header>
        <ServiceButton
          variant="secondary"
          size="large"
          className={`${buttonBorderColor} ${buttonTextColor}`}
          aria-label={`Learn more about ${title}`}
        >
          Learn more
        </ServiceButton>
      </div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-[801px] h-[611px] shrink-0 max-md:w-full max-md:h-[400px] max-md:object-cover max-sm:h-[300px]"
        loading="lazy"
      />
    </article>
  );
};

import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const StatsCards = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <section
        className={`self-center flex justify-between gap-x-[241px] items-end w-full text-white font-normal flex-wrap mt-[61px] max-md:max-w-full max-md:mt-10`}
      >
        <article className="justify-center items-stretch border shadow-[0px_30px_60px_0px_rgba(0,0,0,0.25)] backdrop-blur-[20px] flex min-w-60 flex-col w-[253px] p-5 rounded-[15px] border-solid border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors">
          <div className="max-w-full w-[213px]">
            <div className="text-[32px]">40+</div>
            <div className="text-base mt-1">Projects Launched Successfully</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52f06ba2435161fcbc4a9a234ee89ecae15c1fb8?placeholderIfAbsent=true"
            className="aspect-[3.4] object-contain w-[136px] max-w-full gap-[-8px] mt-4"
            alt="Projects visualization"
          />
        </article>

        <div className="flex items-center justify-end gap-4">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors"
          >
            <img src="/Assets/home page/dribble icon.png" alt="Behance" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        <article className="justify-center items-stretch border shadow-[0px_30px_60px_0px_rgba(0,0,0,0.25)] backdrop-blur-[20px] flex min-w-60 flex-col w-[271px] p-5 rounded-[15px] border-solid border-[rgba(255,255,255,0.40)] hover:border-[rgba(255,255,255,0.6)] transition-colors">
          <div className="max-w-full w-[231px]">
            <div className="text-[32px]">15+</div>
            <div className="text-base mt-1">
              Trusted Clients Across 6 Countries
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd4206e4e24148d979e58973af19ec54dcfb4bc8?placeholderIfAbsent=true"
            className="aspect-[3.4] object-contain w-[136px] max-w-full gap-[-8px] mt-4"
            alt="Clients visualization"
          />
        </article>
      </section>
    </div>
  );
};

export default StatsCards;

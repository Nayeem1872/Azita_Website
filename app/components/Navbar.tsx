"use client";

export default function Navbar() {
  const navLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "Projects" },
    { name: "About" },
    { name: "Contact" },
    { name: "Career" },
  ];
  return (
    <header
      className={`flex min-h-[100px] w-full items-center gap-[40px_100px] text-sm text-white font-bold leading-none justify-between flex-wrap px-[100px] py-[26px] max-md:max-w-full max-md:px-5`}
    >
      <div className="self-stretch flex items-center gap-[11px] text-2xl whitespace-nowrap tracking-[4.8px] leading-none my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/587cf8e83aff3d098037aff536214a7a0cc2d351?placeholderIfAbsent=true"
          className="aspect-[1.07] object-contain w-[31px] self-stretch shrink-0 my-auto"
          alt="AZITA Logo"
        />
        <div className="self-stretch my-auto">AZITA</div>
      </div>

      <div className="p-1 bg-white/10 rounded-full shadow-[0px_30px_60px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[20px] inline-flex justify-center items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.name.toLowerCase()}`}
            // These padding and text classes are chosen to match your reference button's size
            className="py-3 px-5 rounded-full flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-white/10"
          >
            <span className="text-neutral-200 text-sm font-medium leading-tight">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      <button className="border self-stretch flex min-h-12 cursor-pointer items-center justify-center my-auto px-[30px] py-3.5 rounded-[30px] border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
        <span className="self-stretch my-auto">Get started</span>
      </button>
    </header>
  );
}

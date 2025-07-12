"use client";

// 1. Import useState from React and the icons
import { useState } from "react";
import { X } from "lucide-react"; // Using lucide-react for icons
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  // 2. State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "Projects" },
    { name: "About" },
    { name: "Contact" },
    { name: "Career" },
  ];

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Add position-relative to the header to contain the absolute-positioned mobile menu
    <header
      className={`relative flex min-h-[100px] w-full items-center justify-between gap-8 px-8 text-sm font-bold leading-none text-white lg:px-[100px]`}
    >
      {/* Logo */}
      <div className="flex shrink-0 items-center gap-[11px] self-stretch text-2xl leading-none tracking-[4.8px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/587cf8e83aff3d098037aff536214a7a0cc2d351?placeholderIfAbsent=true"
          className="aspect-[1.07] w-[31px] object-contain"
          alt="AZITA Logo"
        />
        <div className="my-auto">AZITA</div>
      </div>

      {/* 3. Desktop Navigation (Hidden on mobile) */}
      <div className="hidden lg:flex p-1 bg-white/10 rounded-full shadow-[0px_30px_60px_0px_rgba(0,0,0,0.25)] outline outline-offset-[-1px] outline-white/30 backdrop-blur-[20px] justify-center items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.name.toLowerCase()}`}
            className="py-3 px-5 rounded-full flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-white/10"
          >
            <span className="text-neutral-200 text-sm font-medium leading-tight">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop "Get Started" Button (Hidden on mobile) */}
      <button className="hidden lg:flex border self-stretch min-h-12 z-50 cursor-pointer items-center justify-center my-auto px-[30px] py-3.5 rounded-[30px] border-white border-solid hover:bg-white hover:text-black transition-colors">
        <span className="self-stretch my-auto">Get started</span>
      </button>

      {/* 4. Mobile Menu Burger Icon (Visible only on mobile) */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <CiMenuFries size={28} />}
        </button>
      </div>

      {/* 5. Mobile Menu Panel (Conditionally rendered) */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-[100px] left-0 w-full bg-black/90 backdrop-blur-md z-40"
          // Add an ID for accessibility
          id="mobile-menu"
        >
          <div className="flex flex-col items-center gap-6 px-4 pt-8 pb-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                // When a link is clicked, close the menu for better UX
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-200 text-lg font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <button
              className="border w-full max-w-xs mt-4 flex min-h-12 z-50 cursor-pointer items-center justify-center px-[30px] py-3.5 rounded-[30px] border-white border-solid hover:bg-white hover:text-black transition-colors"
              onClick={() => {
                console.log("Get started clicked from mobile menu");
                setIsMenuOpen(false); // Also close menu on click
              }}
            >
              <span className="self-stretch my-auto">Get started</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

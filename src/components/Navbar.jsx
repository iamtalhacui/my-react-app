import { MdInvertColors, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm shadow-sm py-3 px-2">
      

      <a
        href="#home"
        className="text-xl cursor-pointer text-[hsl(var(--primary))] pl-5 font-extrabold"
      >
        MT
      </a>

     
      <div className="hidden md:flex gap-10 text-sm font-semibold pr-10">
        <a href="#home" className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
          Home
        </a>
        <a href="#about" className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
          About
        </a>
        <a href="#skills" className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
          Skills
        </a>
        <a href="#projects" className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
          Projects
        </a>
        <a href="#contact" className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">
          Contact
        </a>

        <MdInvertColors
          size={20}
          className="mt-2 transition-colors duration-300 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] rounded-full"
        />

        <button className="transition-all duration-300 cursor-pointer bg-[hsl(var(--primary))] text-[hsl(var(--background))] rounded-lg py-2 px-3 hover:bg-[hsl(var(--primary-hover))]">
          Resume
        </button>
      </div>

      
      <div className="md:hidden flex items-center gap-4 pr-5">
        <MdInvertColors
          size={20}
          className="transition-colors duration-300 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] rounded-full"
        />
        <button onClick={toggleMenu} className="text-[hsl(var(--primary))]">
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[hsl(var(--background))]/95 backdrop-blur-2xl shadow-xl border-t border-[hsl(var(--primary))]/20 md:hidden z-50">
          <div className="flex flex-col gap-3 p-5 text-sm items-center font-extrabold">
            <a href="#home" onClick={toggleMenu} className="nav-link">Home</a>
            <a href="#about" onClick={toggleMenu} className="nav-link">About</a>
            <a href="#skills" onClick={toggleMenu} className="nav-link">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="nav-link">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="nav-link">Contact</a>

            <button
              onClick={toggleMenu}
              className="transition-all duration-300 bg-[hsl(var(--primary))] text-[hsl(var(--background))] rounded-lg py-2 px-4 mt-2 hover:bg-[hsl(var(--primary-hover))]"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

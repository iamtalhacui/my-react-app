

import { MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "py-2.5 px-6" : "py-4 px-6"
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-4xl rounded-full border border-white/15 bg-white/10 dark:bg-black/40 backdrop-blur-xl px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-2xl" : "shadow-md"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="relative font-extrabold text-xl tracking-tight text-[hsl(var(--primary))] group"
          >
            MT
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[hsl(var(--primary))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-200 group ${
                    active === link
                      ? "text-[hsl(var(--primary))]"
                      : "text-[hsl(var(--foreground))] dark:text-white/70 hover:text-[hsl(var(--primary))]"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-[hsl(var(--primary))]/10 transition-all duration-200 ${
                      active === link
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                  <span className="relative">{link}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] hover:rotate-12 hover:scale-110 transition-all duration-200"
            >
              {isDark ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
            </button>

            {/* Resume — desktop */}
            <button className="hidden md:block relative overflow-hidden text-sm font-bold tracking-wide px-5 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] shadow-lg shadow-[hsl(var(--primary))]/30 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition-all duration-200 group">
              <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-300" />
              <span className="relative">Resume</span>
            </button>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 transition-all duration-200"
            >
              <MdMenu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-white/95 dark:bg-[#08080f]/97 backdrop-blur-2xl [animation:fadeScale_0.3s_ease_forwards]">
          {/* Close */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 hover:rotate-90 transition-all duration-200"
          >
            <MdClose size={20} />
          </button>

          {/* Links */}
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => { setActive(link); setIsMenuOpen(false); }}
              style={{ animationDelay: `${i * 60 + 40}ms` }}
              className="font-extrabold text-[2.4rem] leading-tight tracking-tight text-[hsl(var(--foreground))] dark:text-white/85 hover:text-[hsl(var(--primary))] hover:translate-x-2 transition-all duration-200 opacity-0 [animation:slideUp_0.4s_ease_forwards]"
            >
              {link}
            </a>
          ))}

          {/* Resume */}
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{ animationDelay: "340ms" }}
            className="mt-6 font-bold text-base px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] shadow-xl shadow-[hsl(var(--primary))]/30 opacity-0 [animation:slideUp_0.4s_ease_forwards]"
          >
            Resume ↗
          </button>
        </div>
      )}

      {/* Keyframes — only 2 animations that Tailwind can't express natively */}
      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
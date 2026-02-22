import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import CodeWindow from "../components/CodeWindow";

const ROLES = ["Full-Stack Developer", "MERN Stack Engineer", "UI/UX Enthusiast", "Software Engineer"];

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  
  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .anim-fade-up   { opacity:0; animation: fadeUp 0.6s ease forwards; }
        .anim-fade-in   { opacity:0; animation: fadeIn 0.6s ease forwards; }
        .anim-slide-r   { opacity:0; animation: slideRight 0.5s ease forwards; }
        .cursor-blink   { animation: blink 0.9s step-end infinite; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden pt-24 pb-10"
      >
       
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />

        
        <div className="flex-1 flex flex-col px-6 md:px-16 lg:pl-32 xl:pl-40 gap-4 lg:max-w-2xl">

          
          <div
            className="anim-slide-r w-fit"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/8 text-[hsl(var(--primary))] text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
              Open to work
            </span>
          </div>

          
          <p
            className="anim-fade-up text-base font-medium text-[hsl(var(--foreground))]/60 dark:text-white/50 tracking-wide"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm
          </p>

          
          <h1
            className="anim-fade-up text-5xl md:text-6xl font-extrabold tracking-tight text-[hsl(var(--foreground))] dark:text-white leading-none"
            style={{ animationDelay: "0.3s" }}
          >
            Muhammad{" "}
            <span className="relative inline-block text-[hsl(var(--primary))]">
              Talha
             
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[hsl(var(--primary))]/30" />
            </span>
          </h1>

         
          <div
            className="anim-fade-up flex items-center gap-0 text-xl md:text-2xl font-semibold text-[hsl(var(--foreground))]/80 dark:text-white/70 h-9"
            style={{ animationDelay: "0.4s" }}
          >
            <span>{displayed}</span>
            <span className="cursor-blink ml-0.5 inline-block w-[2px] h-6 bg-[hsl(var(--primary))]" />
          </div>

          
          <p
            className="anim-fade-up text-sm md:text-base text-[hsl(var(--foreground))]/60 dark:text-white/40 max-w-md leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Passionate about building fast, beautiful, and accessible web experiences — from pixel-perfect UIs to rock-solid APIs.
          </p>

         
          <div
            className="anim-fade-up flex flex-wrap gap-3 mt-2"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="relative overflow-hidden group px-6 py-2.5 rounded-full font-bold text-sm bg-[hsl(var(--primary))] text-[hsl(var(--background))] shadow-lg shadow-[hsl(var(--primary))]/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-300" />
              <span className="relative">Contact Me</span>
            </a>
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full font-bold text-sm border border-[hsl(var(--foreground))]/20 dark:border-white/15 text-[hsl(var(--foreground))] dark:text-white/80 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </a>
          </div>

         
          <div
            className="anim-fade-up flex items-center gap-4 mt-2"
            style={{ animationDelay: "0.75s" }}
          >
            <span className="text-xs text-[hsl(var(--foreground))]/30 dark:text-white/25 font-medium tracking-widest uppercase">Find me on</span>
            <div className="flex gap-3">
              {[
                {
                  Icon: FaGithub,
                  action: () => openLink("https://github.com/iamtalhacui"),
                  label: "GitHub",
                },
                {
                  Icon: FaLinkedin,
                  action: () => openLink("https://www.linkedin.com/in/m-talha-mern/"),
                  label: "LinkedIn",
                },
                {
                  Icon: CiMail,
                  action: () => (window.location.href = "mailto:muhammadtalhaa123445@gmail.com"),
                  label: "Email",
                },
              ].map(({ Icon, action, label }) => (
                <button
                  key={label}
                  onClick={action}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[hsl(var(--foreground))]/15 dark:border-white/10 text-[hsl(var(--foreground))]/50 dark:text-white/40 hover:border-[hsl(var(--primary))]/60 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/8 hover:scale-110 hover:-rotate-6 transition-all duration-200"
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>
        </div>

        
        <div
          className="anim-fade-in flex-1 flex justify-center lg:justify-start items-center px-6 md:px-16 lg:pr-20 xl:pr-32 mt-14 lg:mt-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative w-full max-w-md">
            
            <div className="absolute -inset-4 rounded-2xl border border-[hsl(var(--primary))]/10 pointer-events-none" />
          
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[hsl(var(--primary))]/20 border border-[hsl(var(--primary))]/30" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-[hsl(var(--primary))]/15 border border-[hsl(var(--primary))]/20" />
            <CodeWindow />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
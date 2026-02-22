import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCode, FaPython, FaPalette, FaJsSquare, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { IoServer } from "react-icons/io5";

const frontendSkills = [
  { icon: FaReact,       label: "React JS",      color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10 border-[#61DAFB]/25" },
  { icon: FaJsSquare,    label: "JavaScript",    color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10 border-[#F7DF1E]/25" },
  { icon: SiTailwindcss, label: "Tailwind CSS",  color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10 border-[#38BDF8]/25" },
  { icon: FaHtml5,       label: "HTML5",         color: "text-[#E34F26]", bg: "bg-[#E34F26]/10 border-[#E34F26]/25" },
  { icon: FaCss3Alt,     label: "CSS3",          color: "text-[#1572B6]", bg: "bg-[#1572B6]/10 border-[#1572B6]/25" },
];

const backendSkills = [
  { icon: FaNodeJs,   label: "Node JS",    color: "text-[#68A063]", bg: "bg-[#68A063]/10 border-[#68A063]/25" },
  { icon: SiExpress,  label: "Express.js", color: "text-[#ffffff]", bg: "bg-white/10 border-white/20" },
  { icon: SiMongodb,  label: "MongoDB",   color: "text-[#47A248]", bg: "bg-[#47A248]/10 border-[#47A248]/25" },
  { icon: SiMysql,    label: "MySQL",     color: "text-[#00758F]", bg: "bg-[#00758F]/10 border-[#00758F]/25" },
];

const programmingSkills = [
  { icon: FaJsSquare, label: "JavaScript", color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10 border-[#F7DF1E]/25" },
  { icon: FaPython,   label: "Python",    color: "text-[#3776AB]", bg: "bg-[#3776AB]/10 border-[#3776AB]/25" },
  { icon: FaJava,     label: "Java",      color: "text-[#ED8B00]", bg: "bg-[#ED8B00]/10 border-[#ED8B00]/25" },
  { icon: FaCode,     label: "C",         color: "text-[#A8B9CC]", bg: "bg-[#A8B9CC]/10 border-[#A8B9CC]/25" },
  { icon: FaHtml5,    label: "HTML5",     color: "text-[#E34F26]", bg: "bg-[#E34F26]/10 border-[#E34F26]/25" },
  { icon: FaCss3Alt,  label: "CSS3",      color: "text-[#1572B6]", bg: "bg-[#1572B6]/10 border-[#1572B6]/25" },
];

const categories = [
  { Icon: FaPalette, title: "Frontend",     subtitle: "Development", skills: frontendSkills,     delay: "0.3s" },
  { Icon: IoServer,  title: "Backend",      subtitle: "Development", skills: backendSkills,      delay: "0.45s" },
  { Icon: FaCode,    title: "Programming",  subtitle: "Languages",   skills: programmingSkills,  delay: "0.6s" },
];

const SkillPill = ({ icon: Icon, label, color, bg }) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${bg} hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default`}>
    <Icon size={14} className={color} />
    <span className="text-xs font-semibold text-[hsl(var(--foreground))] dark:text-white/80">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
      `}</style>

      <section id="skills" className="relative min-h-screen py-24 px-5 md:px-10 lg:px-32 overflow-hidden scroll-mt-20">

        {/* Background blobs */}
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-[hsl(var(--primary))]/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />

        {/* Heading */}
        <div className="anim-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))]/70 mb-2">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] dark:text-white">
            Skills & Technologies
          </h2>
          <div className="h-1 w-14 rounded-full bg-[hsl(var(--primary))] mt-3" />
          <p className="mt-4 text-sm text-[hsl(var(--foreground))]/50 dark:text-white/40 max-w-md">
            A snapshot of the tools and technologies I use to build fast, scalable, and beautiful web apps.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(({ Icon, title, subtitle, skills, delay }) => (
            <div
              key={title}
              className="anim-fade-up group relative flex flex-col gap-5 p-6 rounded-2xl border border-[hsl(var(--primary))]/10 bg-white/60 dark:bg-white/4 backdrop-blur-sm hover:border-[hsl(var(--primary))]/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/8 transition-all duration-300"
              style={{ animationDelay: delay }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/40 to-transparent" />

              {/* Glow blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[hsl(var(--primary))]/8 blur-2xl pointer-events-none group-hover:bg-[hsl(var(--primary))]/16 transition-all duration-300" />

              {/* Icon + Title */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 flex items-center justify-center text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[hsl(var(--foreground))] dark:text-white leading-none">
                    {title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--primary))] font-semibold mt-0.5">{subtitle}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[hsl(var(--foreground))]/8 dark:bg-white/8" />

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillPill key={skill.label} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
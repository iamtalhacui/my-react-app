import EducationCard from "../components/EducationCard";
import profile from "../assets/images/profile.jpeg";

const TAGS = ["MERN Stack", "TailwindCSS", "REST APIs", "UI/UX"];

const About = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 0.6s ease forwards; }
      `}</style>

      <section
        id="about"
        className="relative scroll-mt-20 min-h-screen py-24 px-5 md:px-10 lg:px-32 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />

        {/* Section heading */}
        <div className="anim-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))]/70 mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-14 rounded-full bg-[hsl(var(--primary))] mt-3" />
        </div>

        {/* Card */}
        <div
          className="anim-fade-up mt-12 flex flex-col lg:flex-row gap-0 rounded-2xl border border-[hsl(var(--primary))]/10 bg-white/60 dark:bg-white/4 backdrop-blur-md shadow-xl shadow-black/5 overflow-hidden"
          style={{ animationDelay: "0.25s" }}
        >
          {/* ── Left: Profile sidebar ── */}
          <div className="relative flex flex-col items-center justify-start gap-4 py-10 px-8 lg:w-72 border-b lg:border-b-0 lg:border-r border-[hsl(var(--primary))]/10 bg-white/40 dark:bg-white/3">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))]/40 via-[hsl(var(--primary))] to-[hsl(var(--primary))]/40" />

            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[hsl(var(--primary))]/20 blur-xl scale-110" />
              <img
                src={profile}
                alt="Muhammad Talha"
                className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[hsl(var(--primary))]/40 object-cover hover:scale-105 hover:border-[hsl(var(--primary))] transition-all duration-300"
              />
              {/* Online dot */}
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white dark:border-[#0d1117] animate-pulse" />
            </div>

            <div className="text-center">
              <h3 className="font-extrabold text-lg text-[hsl(var(--foreground))] dark:text-white tracking-tight">
                Muhammad Talha
              </h3>
              <p className="text-sm text-[hsl(var(--foreground))]/50 dark:text-white/40 mt-0.5">
                Software Engineering Student
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold font-mono border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/8 text-[hsl(var(--primary))]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 mt-2">
              {[
                { label: "Projects", value: "10+" },
                { label: "Experience", value: "2yr" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-extrabold text-[hsl(var(--primary))]">{value}</p>
                  <p className="text-xs text-[hsl(var(--foreground))]/40 dark:text-white/30">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio + Education ── */}
          <div className="flex flex-col flex-1 py-10 px-8 md:px-10 gap-8">

            {/* Introduction */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-5 rounded-full bg-[hsl(var(--primary))]" />
                <h3 className="text-lg font-bold text-[hsl(var(--foreground))] dark:text-white">
                  Introduction
                </h3>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[hsl(var(--foreground))]/70 dark:text-white/60 font-mono max-w-xl">
                I'm{" "}
                <span className="font-bold text-[hsl(var(--foreground))] dark:text-white">
                  Muhammad Talha
                </span>
                , a passionate Full-Stack Developer specialising in the{" "}
                <span className="font-bold text-[hsl(var(--primary))]">MERN Stack</span>.
                Always curious, always creating — on a journey to build exciting{" "}
                <span className="font-bold text-[hsl(var(--foreground))] dark:text-white">
                  projects
                </span>{" "}
                that are fast, beautiful, and meaningful.
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-5 rounded-full bg-[hsl(var(--primary))]" />
                <h3 className="text-lg font-bold text-[hsl(var(--foreground))] dark:text-white">
                  Education
                </h3>
              </div>
              <EducationCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
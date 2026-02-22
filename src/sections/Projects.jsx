import { ProjectCard } from "../components/ProjectCard";
import estoreImg from "../assets/images/e-store.png";
import gymImg from "../assets/images/gym-site.png";
import rpsImg from "../assets/images/rock-paper-scissor.png";
import tidytango from "../assets/images/tidytango.png";

const projects = [
  {
    title: "E-Store Website",
    description: "A clean e-commerce UI built with React and Tailwind CSS, featuring modern design and smooth user experience.",
    image: estoreImg,
    technologies: ["React", "TailwindCSS"],
    liveUrl: "https://e-store-plum-chi.vercel.app",
    githubUrl: "https://github.com/iamtalhacui/e-store",
    date: "2024",
  },
  {
    title: "Code & Gym Website",
    description: "Responsive gym landing page built with React and Tailwind CSS, featuring a clean layout and modern UI components.",
    image: gymImg,
    technologies: ["React.js", "Animations", "Tailwind"],
    liveUrl: "https://gym-site-phi.vercel.app/",
    githubUrl: "https://github.com/iamtalhacui/gym-site",
    date: "2024",
  },
  {
    title: "Tidy Tango Cleaning",
    description: "A responsive complete website for Tidy Tango, a cleaning services company based in UAE.",
    image: tidytango,
    technologies: ["React", "TailwindCSS", "JavaScript"],
    liveUrl: "https://tidytango.online",
    githubUrl: "https://github.com/iamtalhacui/tidytango",
    date: "2025",
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
      `}</style>

      <section id="projects" className="relative min-h-screen py-24 px-5 md:px-10 lg:px-32 overflow-hidden scroll-mt-20">

        {/* Background blobs */}
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />

        {/* Heading */}
        <div className="anim-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))]/70 mb-2">
            What I've built
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] dark:text-white">
            Projects
          </h2>
          <div className="h-1 w-14 rounded-full bg-[hsl(var(--primary))] mt-3" />
          <p className="mt-4 text-sm text-[hsl(var(--foreground))]/50 dark:text-white/40 max-w-md">
            A selection of real-world projects I've designed and developed from scratch.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="anim-fade-up"
              style={{ animationDelay: `${0.25 + index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
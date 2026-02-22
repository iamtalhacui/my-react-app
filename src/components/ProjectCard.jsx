import { ExternalLink, Github, Calendar } from "lucide-react";

export const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of your amazing project.",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  technologies = ["React", "JavaScript", "CSS"],
  liveUrl = "#",
  githubUrl = "#",
  date = "2024",
}) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-[hsl(var(--primary))]/10 bg-white/60 dark:bg-white/4 backdrop-blur-sm overflow-hidden hover:border-[hsl(var(--primary))]/25 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-300 max-w-sm w-full">

      {/* Top gradient hairline */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/40 to-transparent z-10" />

      {/* Image area */}
      <div className="relative h-44 overflow-hidden bg-[hsl(var(--primary))]/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-lg"
            style={{ transitionDelay: "0.05s" }}
          >
            <ExternalLink size={17} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
            style={{ transitionDelay: "0.1s" }}
          >
            <Github size={17} />
          </a>
        </div>

        {/* Date badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold">
          <Calendar size={11} />
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-extrabold text-base tracking-tight text-[hsl(var(--foreground))] dark:text-white group-hover:text-[hsl(var(--primary))] transition-colors duration-200 line-clamp-1">
          {title}
        </h3>

        <p className="text-xs text-[hsl(var(--foreground))]/55 dark:text-white/40 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/8 text-[hsl(var(--primary))]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex-1 group/btn flex items-center justify-center gap-1.5 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] text-xs font-bold shadow-md shadow-[hsl(var(--primary))]/25 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover/btn:translate-x-[120%] transition-transform duration-300" />
            <ExternalLink size={12} />
            <span className="relative">Live Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-[hsl(var(--foreground))]/15 dark:border-white/10 text-[hsl(var(--foreground))]/70 dark:text-white/60 text-xs font-bold hover:border-[hsl(var(--primary))]/40 hover:text-[hsl(var(--primary))] hover:-translate-y-0.5 transition-all duration-200"
          >
            <Github size={12} />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
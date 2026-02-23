import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const quickLinks = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

const services = [
  "Web Development",
  "Frontend Design",
  "React Applications",
  "API Integration",
  "UI/UX Design",
];

const socials = [
  { icon: Github,    action: () => openLink("https://github.com/iamtalhacui"),             label: "GitHub",    hover: "hover:border-white/40 hover:text-white hover:bg-white/10" },
  { icon: Linkedin,  action: () => openLink("https://www.linkedin.com/in/m-talha-mern/"), label: "LinkedIn",  hover: "hover:border-[#0A66C2]/50 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10" },
  { icon: Instagram, action: () => openLink("https://www.instagram.com/mr_talha_here/"),  label: "Instagram", hover: "hover:border-pink-400/50 hover:text-pink-400 hover:bg-pink-400/10" },
  { icon: Mail,      action: () => openLink("mailto:imtalha.dev@gmail.com"),               label: "Email",     hover: "hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10" },
];

const contactItems = [
  { icon: Mail,   value: "imtalha.dev@gmail.com" },
  { icon: Phone,  value: "+92 316 5772553" },
  { icon: MapPin, value: "Abbottabad, Pakistan" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[hsl(var(--primary))]/10 bg-white/40 dark:bg-white/3 backdrop-blur-sm overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--primary))]/4 blur-3xl pointer-events-none" />

      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand col ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <a href="#home" className="font-extrabold text-2xl tracking-tight text-[hsl(var(--primary))]">
                MT
              </a>
              <p className="mt-3 text-sm text-[hsl(var(--foreground))]/50 dark:text-white/35 leading-relaxed">
                Full-stack developer passionate about building beautiful, functional web experiences. Always learning, always shipping.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, action, label, hover }) => (
                <button
                  key={label}
                  onClick={action}
                  aria-label={label}
                  className={`flex items-center justify-center w-9 h-9 rounded-full border border-[hsl(var(--foreground))]/12 dark:border-white/10 text-[hsl(var(--foreground))]/40 dark:text-white/30 ${hover} hover:scale-110 hover:-rotate-6 transition-all duration-200`}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[hsl(var(--primary))]" />
              <h4 className="text-sm font-bold text-[hsl(var(--foreground))] dark:text-white tracking-wide">Quick Links</h4>
            </div>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-[hsl(var(--foreground))]/50 dark:text-white/35 hover:text-[hsl(var(--primary))] hover:translate-x-1 transition-all duration-200 inline-flex"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[hsl(var(--primary))]" />
              <h4 className="text-sm font-bold text-[hsl(var(--foreground))] dark:text-white tracking-wide">Services</h4>
            </div>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-[hsl(var(--foreground))]/50 dark:text-white/35 hover:text-[hsl(var(--primary))] hover:translate-x-1 transition-all duration-200 cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[hsl(var(--primary))]" />
              <h4 className="text-sm font-bold text-[hsl(var(--foreground))] dark:text-white tracking-wide">Get In Touch</h4>
            </div>

            <div className="flex flex-col gap-3">
              {contactItems.map(({ icon: Icon, value }) => (
                <div key={value} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/15 flex items-center justify-center text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/20 transition-all duration-200">
                    <Icon size={12} />
                  </div>
                  <span className="text-xs text-[hsl(var(--foreground))]/55 dark:text-white/35">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="relative overflow-hidden group mt-1 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] text-xs font-bold shadow-md shadow-[hsl(var(--primary))]/25 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-300" />
              <span className="relative">Let's Work Together ↗</span>
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-[hsl(var(--foreground))]/8 dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--foreground))]/35 dark:text-white/25">
            © {year} Muhammad Talha · Built with React & TailwindCSS
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--foreground))]/12 dark:border-white/10 text-xs font-semibold text-[hsl(var(--foreground))]/45 dark:text-white/30 hover:border-[hsl(var(--primary))]/40 hover:text-[hsl(var(--primary))] hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to top
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
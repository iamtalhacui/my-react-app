import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const contactInfo = [
  { icon: Mail,    label: "Email",    value: "imtalha.dev@gmail.com",  color: "text-[hsl(var(--primary))]", bg: "bg-[hsl(var(--primary))]/10 border-[hsl(var(--primary))]/20" },
  { icon: Phone,   label: "Phone",    value: "+92 316 5772553",         color: "text-emerald-500",           bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: MapPin,  label: "Location", value: "Abbottabad, Pakistan",    color: "text-rose-400",              bg: "bg-rose-400/10 border-rose-400/20" },
];

const socials = [
  { icon: Github,   action: () => openLink("https://github.com/iamtalhacui"),              label: "GitHub",    style: "border-white/15 hover:border-white/40 hover:bg-white/10 text-white/60 hover:text-white" },
  { icon: Linkedin, action: () => openLink("https://www.linkedin.com/in/m-talha-mern/"),  label: "LinkedIn",  style: "border-white/15 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 text-white/60 hover:text-[#0A66C2]" },
  { icon: Instagram,action: () => openLink("https://www.instagram.com/mr_talha_here/"),   label: "Instagram", style: "border-white/15 hover:border-pink-400/60 hover:bg-pink-400/15 text-white/60 hover:text-pink-400" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClass =
    "w-full px-4 py-2.5 text-sm rounded-xl border border-[hsl(var(--foreground))]/12 dark:border-white/10 bg-white/50 dark:bg-white/4 text-[hsl(var(--foreground))] dark:text-white placeholder:text-[hsl(var(--foreground))]/30 dark:placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/40 focus:border-[hsl(var(--primary))]/40 hover:border-[hsl(var(--primary))]/25 transition-all duration-200";

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
      `}</style>

      <section id="contact" className="relative min-h-screen py-24 px-5 md:px-10 lg:px-32 overflow-hidden scroll-mt-20">

        {/* Background blobs */}
        <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl pointer-events-none" />

        {/* Heading */}
        <div className="anim-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))]/70 mb-2">
            Let's work together
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] dark:text-white">
            Contact Me
          </h2>
          <div className="h-1 w-14 rounded-full bg-[hsl(var(--primary))] mt-3" />
          <p className="mt-4 text-sm text-[hsl(var(--foreground))]/50 dark:text-white/40 max-w-md">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        {/* Main card */}
        <div
          className="anim-fade-up mt-12 grid grid-cols-1 lg:grid-cols-5 rounded-2xl border border-[hsl(var(--primary))]/10 overflow-hidden shadow-xl shadow-black/5"
          style={{ animationDelay: "0.25s" }}
        >
          {/* ── Left sidebar ── */}
          <div className="relative lg:col-span-2 flex flex-col gap-8 p-8 bg-[hsl(var(--primary))] overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/8 pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Get In Touch</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                I'm always excited to connect with fellow developers, potential clients, and creative minds.
              </p>
            </div>

            {/* Contact info items */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, bg, color }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl border bg-white/15 border-white/20 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-white/25`}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-white/45 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium text-white/85">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] font-semibold text-white/45 uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, action, label, style }) => (
                  <button
                    key={label}
                    onClick={action}
                    aria-label={label}
                    className={`flex items-center justify-center w-9 h-9 rounded-full border ${style} hover:scale-110 hover:-rotate-6 transition-all duration-200`}
                  >
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 flex flex-col gap-5 p-8 bg-white/60 dark:bg-white/4 backdrop-blur-sm">
            <h3 className="font-extrabold text-lg text-[hsl(var(--foreground))] dark:text-white tracking-tight">
              Send a Message
            </h3>

            {/* Success banner */}
            {submitted && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[hsl(var(--foreground))]/60 dark:text-white/40 uppercase tracking-wider">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Muhammad Talha" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[hsl(var(--foreground))]/60 dark:text-white/40 uppercase tracking-wider">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[hsl(var(--foreground))]/60 dark:text-white/40 uppercase tracking-wider">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[hsl(var(--foreground))]/60 dark:text-white/40 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project or just say hello!"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || submitted}
              className="relative overflow-hidden group flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] font-bold text-sm shadow-lg shadow-[hsl(var(--primary))]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/35 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-300" />
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  <span className="relative">Sending…</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span className="relative">Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
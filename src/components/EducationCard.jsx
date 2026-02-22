export default function EducationCard() {
  return (
    <div className="relative mt-5 max-w-xl rounded-2xl border border-[hsl(var(--primary))]/15 bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-300">

      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--primary))]/60 via-[hsl(var(--primary))] to-[hsl(var(--primary))]/40" />

      {/* Glow blob */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[hsl(var(--primary))]/10 blur-2xl pointer-events-none group-hover:bg-[hsl(var(--primary))]/20 transition-all duration-300" />

      <div className="flex items-start gap-4 p-5">
        {/* Icon */}
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 flex items-center justify-center text-xl">
          🎓
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-bold text-[hsl(var(--foreground))] dark:text-white leading-snug">
            BS Software Engineering
          </h2>
          <p className="text-sm font-semibold text-[hsl(var(--primary))]">
            COMSATS University Abbottabad
          </p>
          <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-medium text-[hsl(var(--foreground))]/50 dark:text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            2023 — Present
          </span>
        </div>
      </div>
    </div>
  );
}
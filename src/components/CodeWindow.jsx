const CodeWindow = ({ title = "developer.js", className = "" }) => {
  const isDark = document.documentElement.classList.contains("dark");

  const c = isDark
    ? {
        win: "bg-[#0d1117] border border-white/10",
        header: "bg-[#161b22] border-b border-white/10",
        title: "text-gray-400",
        comment: "text-[#8b949e]",
        keyword: "text-[#ff7b72]",
        prop: "text-[#79c0ff]",
        string: "text-[#a5d6ff]",
        punct: "text-[#e6edf3]",
        bracket: "text-[#ffa657]",
        lineNum: "text-[#3d444d]",
      }
    : {
        win: "bg-[#fafafa] border border-gray-200",
        header: "bg-gray-100 border-b border-gray-200",
        title: "text-gray-500",
        comment: "text-[#6a737d]",
        keyword: "text-[#d73a49]",
        prop: "text-[#005cc5]",
        string: "text-[#032f62]",
        punct: "text-[#24292e]",
        bracket: "text-[#e36209]",
        lineNum: "text-[#ccc]",
      };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(1deg); }
          66%       { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px hsl(var(--primary) / 0.15), 0 20px 60px rgba(0,0,0,0.12); }
          50%       { box-shadow: 0 0 40px hsl(var(--primary) / 0.30), 0 30px 80px rgba(0,0,0,0.18); }
        }
        .code-window {
          animation: float 5s ease-in-out infinite, pulseGlow 5s ease-in-out infinite;
        }
        .code-window:hover {
          animation-play-state: paused;
          transform: scale(1.03) rotate(-1deg);
          transition: transform 0.3s ease;
        }
      `}</style>

      <div className={`code-window relative rounded-xl overflow-hidden transition-transform duration-300 ${c.win} ${className}`}>

        {/* Glow blob */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[hsl(var(--primary))]/20 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className={`${c.header} px-4 py-3 flex items-center justify-between`}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className={`${c.title} text-xs font-medium tracking-wide`}>{title}</span>
          <div className="w-16" />
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[13px] leading-6">

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>1</span>
            <span className={c.comment}>{"// Software Engineer"}</span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>2</span>
            <span>
              <span className={c.keyword}>const </span>
              <span className={c.prop}>developer</span>
              <span className={c.punct}> = </span>
              <span className={c.bracket}>{"{"}</span>
            </span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>3</span>
            <span className="ml-4">
              <span className={c.prop}>name</span>
              <span className={c.punct}>: </span>
              <span className={c.string}>'Muhammad Talha'</span>
              <span className={c.punct}>,</span>
            </span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>4</span>
            <span className="ml-4">
              <span className={c.prop}>skills</span>
              <span className={c.punct}>: [</span>
              <span className={c.string}>'MERN Stack'</span>
              <span className={c.punct}>, </span>
              <span className={c.string}>'TailwindCSS'</span>
              <span className={c.punct}>, </span>
              <span className={c.string}>'Rest API'</span>
              <span className={c.punct}>],</span>
            </span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>5</span>
            <span className="ml-4">
              <span className={c.prop}>focuses</span>
              <span className={c.punct}>: [</span>
              <span className={c.string}>'Full-Stack Dev'</span>
              <span className={c.punct}>, </span>
              <span className={c.string}>'UI/UX'</span>
              <span className={c.punct}>],</span>
            </span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>6</span>
            <span className="ml-4">
              <span className={c.prop}>learning</span>
              <span className={c.punct}>: [</span>
              <span className={c.string}>'Next.js'</span>
              <span className={c.punct}>, </span>
              <span className={c.string}>'Web Performance'</span>
              <span className={c.punct}>],</span>
            </span>
          </div>

          <div className="flex">
            <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>7</span>
            <span className={c.bracket}>{"}"}</span>
            <span className={c.punct}>;</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default CodeWindow;
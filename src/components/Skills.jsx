export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "💠" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
    ],
    tools: [
      { name: "Git & GitHub", icon: "🔧" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ],
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
        <p className="text-gray-400 mb-12 dark:text-white">
          A snapshot of the tools and technologies I use regularly
        </p>
      </div>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold capitalize mb-6 text-center">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {items.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className="text-4xl mb-3">{skill.icon}</span>
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

import React from 'react'
import { FaHtml5, FaServer, FaCss3Alt, FaReact, FaNodeJs, FaCode, FaPython, FaPalette, FaJsSquare, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import SkillTag from '../components/SkillTag';
import { IoServer } from "react-icons/io5";

const Skills = () => {

  const frontendSkills = [
    { icon: FaReact, label: "React JS", colorClass: "bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100" },
    { icon: FaJsSquare, label: "Javascript", colorClass: "bg-yellow-50 text-yellow-800 border border-yellow-300 hover:bg-yellow-100" },
    { icon: SiTailwindcss, label: "Tailwind CSS", colorClass: "bg-teal-50 text-teal-800 border border-teal-300 hover:bg-teal-100" },
    { icon: FaHtml5, label: "HTML5", colorClass: "bg-orange-50 text-orange-800 border border-orange-300 hover:bg-orange-100" },
    { icon: FaCss3Alt, label: "CSS3", colorClass: "bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100" }
  ];

  const backendSkills = [
    { icon: FaNodeJs, label: "Node JS", colorClass: "bg-green-50 text-green-800 border border-green-300 hover:bg-green-100" },
    { icon: SiExpress, label: "Express.js", colorClass: "bg-yellow-50 text-yellow-800 border border-yellow-300 hover:bg-yellow-100" },
    { icon: SiMongodb, label: "MongoDB", colorClass: "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100" },
    { icon: SiMysql, label: "MySQL", colorClass: "bg-sky-50 text-sky-800 border border-sky-300 hover:bg-sky-100" }
  ];

  const programmingSkills = [
    { icon: FaJsSquare, label: "JavaScript", colorClass: "bg-yellow-50 text-yellow-800 border border-yellow-300 hover:bg-yellow-100" },
    { icon: FaPython, label: "Python", colorClass: "bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100" },
    { icon: FaJava, label: "Java", colorClass: "bg-red-50 text-red-800 border border-red-300 hover:bg-red-100" },
    { icon: FaCode, label: "C", colorClass: "bg-indigo-50 text-indigo-800 border border-indigo-300 hover:bg-indigo-100" },
    { icon: FaHtml5, label: "HTML5", colorClass: "bg-orange-50 text-orange-800 border border-orange-300 hover:bg-orange-100" },
    { icon: FaCss3Alt, label: "CSS3", colorClass: "bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100" }
  ];

  return (
    <div id='skills' className='min-h-screen w-full pt-10 px-4'>
      <div className='md:ml-18'>
        <h1 className='mt-10 text-4xl font-bold text-[hsl(var(--foreground))] text-center md:text-left'>Skills & Technologies</h1>
        <div className='mx-auto md:mx-0 rounded-full h-2 w-30 mt-2 bg-[hsl(var(--primary))]'></div>
        <p className='text-gray-600 mt-3 text-center md:text-left'>A snapshot of the tools and technologies I use regularly</p>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 m-10 rounded-md p-5'>

        
        <div className='bg-white rounded-2xl shadow-xl hover:shadow-2xl flex flex-col gap-4 justify-center items-center p-5 w-full md:w-1/3'>
          <FaPalette size={60} />
          <h1 className='text-[hsl(var(--primary))] font-bold text-2xl text-center'>Frontend Development</h1>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {frontendSkills.map((skill, index) => (
              <SkillTag key={index} icon={skill.icon} label={skill.label} colorClass={skill.colorClass} />
            ))}
          </div>
        </div>

       
        <div className='bg-white rounded-2xl shadow-xl hover:shadow-2xl flex flex-col gap-4 justify-center items-center p-5 w-full md:w-1/3'>
          <IoServer size={60} />
          <h1 className='text-[hsl(var(--primary))] font-bold text-2xl text-center'>Backend Development</h1>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {backendSkills.map((skill, index) => (
              <SkillTag key={index} icon={skill.icon} label={skill.label} colorClass={skill.colorClass} />
            ))}
          </div>
        </div>

        
        <div className='bg-white rounded-2xl shadow-xl hover:shadow-2xl flex flex-col gap-4 justify-center items-center p-5 w-full md:w-1/3'>
          <FaCode size={60} />
          <h1 className='text-[hsl(var(--primary))] font-bold text-2xl text-center'>Programming Languages</h1>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {programmingSkills.map((skill, index) => (
              <SkillTag key={index} icon={skill.icon} label={skill.label} colorClass={skill.colorClass} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;

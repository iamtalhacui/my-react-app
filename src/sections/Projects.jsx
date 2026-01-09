
import { ProjectCard } from '../components/ProjectCard';
import estoreImg from "../assets/images/e-store.png";
import gymImg from "../assets/images/gym-site.png";
import rpsImg from "../assets/images/rock-paper-scissor.png";
import tidytango from "../assets/images/tidytango.png"
const Projects = () => {
    const projects = [
    {
      title: "E-Store Website",
      description: "A Simple e-commerce UI built with React and Tailwind CSS, featuring modern design and smooth user experience.",
      image: estoreImg,
      technologies: ["React", "TailwindCSS",],
      liveUrl : "https://e-store-plum-chi.vercel.app",
        githubUrl: "https://github.com/iamtalhacui/e-store",
      date: "2024"
    },
    {
      title: "Code & Gym Website",
      description: "Responsive gym landing page built with React and Tailwind CSS, featuring a clean layout and modern UI components.",
      image: gymImg,
      technologies: ["React.js", "Animations", "Tailwind"],
      liveUrl: "https://gym-site-phi.vercel.app/",
      githubUrl: "https://github.com/iamtalhacui/gym-site",
      date: "2024"
    },
    {
      title: "Tidy Tango Cleaning Website",
      description: "A responsive and complete website for Tidy Tango a CLeaning services company based in UAE.",
      image: tidytango,
      technologies: ["React", "TailwindCSS", "JavaScript"],
      liveUrl: "https://tidytango.online",
      githubUrl: "https://github.com/iamtalhacui/tidytango",
      date: "2025"
    },
    
  ];
  return (
    <div id='projects' className='h-screen w-full pt-20'>
          <h1 className='mt-5 text-2xl md:text-3xl lg:text-4xl font-bold px-5 md:px-10 lg:pl-30 text-[hsl(var(--foreground))] '>Projects</h1>
         <div className='mx-5 md:mx-10 lg:ml-30 rounded-full h-2 w-16 mt-2  bg-[hsl(var(--primary))]'></div>
    
        <div className='mt-10  flex md:flex-row flex-col md:space-x-4 justify-center  space-y-5 flex-wrap'>
             {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </div>
  )
}

export default Projects
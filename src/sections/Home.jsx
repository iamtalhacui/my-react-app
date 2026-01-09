import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import CodeWindow from "../components/CodeWindow";

const Home = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20" id="home">
      
      <div className="flex flex-col px-5 md:px-20 lg:pl-40 pt-20 md:pt-32 lg:pt-40 gap-2 lg:w-170">
        <span className="text-base md:text-lg font-semibold text-[hsl(var(--foreground))]">
          Hello I am
        </span>

        <h1 className="text-3xl md:text-5xl text-[hsl(var(--foreground))] font-extrabold">
          Muhammad <span className="text-[hsl(var(--primary))]">Talha</span>
        </h1>

        <span className="text-[hsl(var(--foreground))] text-lg md:text-xl lg:text-2xl mt-2">
          A Full-Stack Web Developer & Passionate Software Engineering Student
        </span>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button className="py-2 px-3 font-bold rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--background))] transition-all duration-300 hover:scale-105 hover:bg-[hsl(var(--primary-hover))]">
            Contact Me
          </button>

          <button className="py-2 px-3 font-bold rounded-lg border border-[hsl(var(--foreground))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-all duration-300 hover:scale-105 hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))]">
            View Projects
          </button>

          <div className="flex gap-3 justify-center sm:justify-start sm:ml-10">
            <FaGithub
              size={30}
              onClick={() => openLink("https://github.com/iamtalhacui")}
              className="mt-1 cursor-pointer text-green-400 transition-all duration-300 hover:text-[hsl(var(--primary))] hover:rotate-10 hover:scale-110"
            />

            <FaLinkedin
              size={30}
              onClick={() =>
                openLink("https://www.linkedin.com/in/m-talha-mern/")
              }
              className="mt-1 cursor-pointer text-green-400 transition-all duration-300 hover:text-[hsl(var(--primary))] hover:rotate-10 hover:scale-110"
            />

            <CiMail
              size={30}
              onClick={() =>
                (window.location.href =
                  "mailto:muhammadtalhaa123445@gmail.com")
              }
              className="mt-1 cursor-pointer text-green-400 transition-all duration-300 hover:text-[hsl(var(--primary))] hover:rotate-10 hover:scale-110"
            />
          </div>
        </div>
      </div>

      
      <div className="pt-10 lg:pt-40 px-5 md:px-20 lg:pl-20">
        <CodeWindow />
      </div>
    </div>
  );
};

export default Home;

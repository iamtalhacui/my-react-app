
import EducationCard from '../components/EducationCard'
import profile from "../assets/images/profile.jpeg";
const About = () => {
    
  return (
    <div id='about' className='scroll-mt-20 min-h-screen bg-[hsl(var(--background))] md:mt-0 mt-40'>
        <h1 className='mt-5 text-2xl md:text-3xl lg:text-4xl font-bold px-5 md:px-10 lg:pl-30 text-[hsl(var(--foreground))] '>About Me</h1>
         <div className='mx-5 md:mx-10 lg:ml-30 rounded-full h-2 w-20 mt-2  bg-[hsl(var(--primary))]'></div>
       <div className='flex flex-col lg:flex-row rounded-md min-h-100 shadow-[0_8px_20px_rgba(0,0,0,0.15),0_-4px_10px_rgba(255,255,255,0.9)] bg-gradient-to-br from-slate-50 via-white to-blue-50 w-[90%] md:w-4/5 mx-5 md:mx-10 lg:ml-30 mt-10'>
       
        <div className='flex flex-col max-h-80 mt-5 mx-5 lg:ml-30 lg:order-2 px-4'>
            <div className='flex flex-col justify-center items-center'>
               <img src={profile} alt="" className='rounded-full border-2 border-[hsl(var(--primary))] h-32 w-32 md:h-40 md:w-40 hover:scale-105 transition-all ease-in-out duration-300'/>
               <h1 className='font-extrabold text-xl md:text-2xl text-[hsl(var(--foreground))] mt-3'>Muhammad Talha</h1>
               <p className='text-base md:text-lg text-gray-600'>Software Engineering Student</p>
               <div className='flex flex-wrap justify-center gap-2 mt-2'>
                 <div className='rounded-xl h-7 px-2 border-1 border-black bg-gray-300 text-center pt-1 text-hsl[(var(--foreground))] font-semibold font-mono text-xs md:text-sm'>MERN Stack</div>
                 <div className='rounded-xl h-7 px-2 border-1 border-black bg-gray-300 text-center pt-1 text-hsl[(var(--foreground))] font-semibold font-mono text-xs md:text-sm'>Tailwind</div>
                 <div className='rounded-xl h-7 px-2 border-1 border-black bg-gray-300 text-center pt-1 text-hsl[(var(--foreground))] font-semibold font-mono text-xs md:text-sm'>Rest Apis</div>
               </div>
            </div>
        </div>
        
      
        <div className='flex flex-col py-5 px-5 md:px-10 lg:max-w-2xl lg:order-1'>
            <h1 className='text-[hsl(var(--primary))] font-bold text-xl md:text-2xl'> 
               Introduction
            </h1>
            <span className='font-mono mt-3 text-sm md:text-base'>I'm  <span className=' font-bold text-base md:text-lg'>Muhammad Talha</span>, a passionate Full-Stack developer using MERN Stack Always curious, always creating — on a journey to work on exicting <span className=' font-bold text-base md:text-lg'>projects</span></span>
          <h1 className='text-[hsl(var(--primary))] font-bold text-xl md:text-2xl mt-3'> 
               Education
            </h1>
           <EducationCard />
        </div>
       </div>
    </div>

  )
}

export default About
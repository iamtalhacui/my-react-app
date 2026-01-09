
import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export const ProjectCard = ({ 
  title = "Project Title",
  description = "A brief description of your amazing project that showcases your skills and expertise in modern web development.",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  technologies = ["React", "JavaScript", "CSS"],
  liveUrl = "#",
  githubUrl = "#",
  date = "2024"
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 max-w-sm mx-4">
      
      <div className="relative overflow-hidden h-40 bg-gradient-to-br from-blue-50 to-indigo-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
      
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Github size={20} />
          </a>
        </div>

        
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 text-sm text-gray-700 shadow-md">
          <Calendar size={14} />
          <span className="font-medium">{date}</span>
        </div>
      </div>

     
      <div className="p-6">
       
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[hsl(var(--primary))] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

       
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
            >
              <Tag size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>

        
        <div className="flex space-x-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-[hsl(var(--primary))] text-white text-center py-2 px-4 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-[hsl(var(--primary-hover))] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-gray-300"
          >
            Source Code
          </a>
        </div>
      </div>

      
      <div className="h-1 bg-gradient-to-r from-blue-400 via-[hsl(var(--primary))] to-[hsl(var(--primary-hover))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
    </div>
  );
};
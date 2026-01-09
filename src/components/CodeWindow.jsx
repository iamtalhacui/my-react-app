
import React, { useState } from 'react';

const CodeWindow = ({ title = "developer.js", className = "", theme = "light" }) => {
  const isDark = theme === "dark";

  
  const themes = {
    light: {
      windowBg: "bg-white border-2 border-gray-300",
      headerBg: "bg-gray-50 border-b border-gray-200",
      titleText: "text-gray-800",
      commentText: "text-gray-600",
      keywordText: "text-purple-700",
      propertyText: "text-emerald-700",
      stringText: "text-amber-600",
      punctuationText: "text-gray-900",
      bracketText: "text-orange-600",
      shadow: "shadow-lg hover:shadow-2xl"
    },
    dark: {
      windowBg: "bg-gray-800",
      headerBg: "bg-gray-700",
      titleText: "text-gray-300",
      commentText: "text-gray-400",
      keywordText: "text-pink-400",
      propertyText: "text-blue-400",
      stringText: "text-orange-400",
      punctuationText: "text-white",
      bracketText: "text-yellow-400",
      shadow: "shadow-2xl hover:shadow-3xl"
    }
  };

  const currentTheme = isDark ? themes.dark : themes.light;

  return (
    <div className={`transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:-rotate-3 ${currentTheme.windowBg} rounded-lg ${currentTheme.shadow} overflow-hidden max-w-lg max-h-lg ${className}`}>
      
      
      <div className={`${currentTheme.headerBg} px-4 py-3 flex items-center justify-between`}>
        
        
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        
        <div className={`${currentTheme.titleText} text-sm font-medium`}>{title}</div>
        <div className="w-16"></div>
      </div>

      
      <div className="p-4 font-mono text-sm">
        
        
        <div className={`${currentTheme.commentText} mb-2`}>// Software Engineer</div>
        
        
        <div>
          <span className={currentTheme.keywordText}>const</span>{' '}
          <span className={currentTheme.propertyText}>developer</span>{' '}
          <span className={currentTheme.punctuationText}>=</span>{' '}
          <span className={currentTheme.bracketText}>{'{'}</span>
        </div>
        
       
        <div className="ml-4 mt-1 space-y-1">
          <div>
            <span className={currentTheme.propertyText}>name</span>
            <span className={currentTheme.punctuationText}>:</span>{' '}
            <span className={currentTheme.stringText}>'Muhammad Talha'</span>
            <span className={currentTheme.punctuationText}>,</span>
          </div>
          
          <div>
            <span className={currentTheme.propertyText}>skills</span>
            <span className={currentTheme.punctuationText}>:</span>{' '}
            <span className={currentTheme.punctuationText}>[</span>
            <span className={currentTheme.stringText}>'MERN Stack'</span>
            <span className={currentTheme.punctuationText}>,</span>{' '}
            <span className={currentTheme.stringText}>'TailwindCSS'</span>
            <span className={currentTheme.punctuationText}>,</span>{' '}
            <span className={currentTheme.stringText}>'Rest API'</span>
            <span className={currentTheme.punctuationText}>],</span>
          </div>
          
          <div>
            <span className={currentTheme.propertyText}>focuses</span>
            <span className={currentTheme.punctuationText}>:</span>{' '}
            <span className={currentTheme.punctuationText}>[</span>
            <span className={currentTheme.stringText}>'Full-Stack Dev'</span>
            <span className={currentTheme.punctuationText}>,</span>{' '}
            <span className={currentTheme.stringText}>'UI/UX'</span>
            <span className={currentTheme.punctuationText}>],</span>
          </div>
          
          <div>
            <span className={currentTheme.propertyText}>learning</span>
            <span className={currentTheme.punctuationText}>:</span>{' '}
            <span className={currentTheme.punctuationText}>[</span>
            <span className={currentTheme.stringText}>'Next.js'</span>
            <span className={currentTheme.punctuationText}>,</span>{' '}
            <span className={currentTheme.stringText}>'Web Performance'</span>
            <span className={currentTheme.punctuationText}>],</span>
          </div>
        </div>
        
       
        <div className={`${currentTheme.bracketText} mt-1`}>{'};'}</div>
      </div>
    </div>
  );
};

export default CodeWindow;
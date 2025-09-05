"use client";

import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages & Web",
      icon: "🌐",
      skills: ["Java", "JavaScript ES6+", "HTML5", "CSS3"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Front-End",
      icon: "⚛️",
      skills: ["React.js", "Next.js", "Advanced JS", "Decision-making Logic"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Back-End",
      icon: "⚙️",
      skills: ["Java EE", "Spring", "Spring Boot", "Hibernate", "RESTful APIs"],
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Core Concepts",
      icon: "🧠",
      skills: ["OOP PIE", "Arrays", "Strings", "Web Programming"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Tools & Methodologies",
      icon: "🛠️",
      skills: ["Git", "Maven/Gradle", "SQL", "Agile Scrum", "Unit Testing JUnit"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build modern applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: `${categoryIndex * 200}ms`,
                animationDelay: `${categoryIndex * 200}ms`
              }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ 
                      transitionDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Proficiency Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { skill: "Java Development", level: "Advanced", percentage: 85 },
                { skill: "React.js", level: "Advanced", percentage: 80 },
                { skill: "Spring Boot", level: "Intermediate", percentage: 75 },
                { skill: "Database Design", level: "Intermediate", percentage: 70 }
              ].map((item, index) => (
                <div key={item.skill} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.percentage / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <h4 className="text-white font-medium mb-1">{item.skill}</h4>
                  <p className="text-gray-400 text-sm">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
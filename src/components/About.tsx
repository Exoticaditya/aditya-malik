"use client";

import { useState, useEffect, useRef } from "react";

const About = () => {
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

  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "B. Tech Computer Science Engineering"
    },
    {
      icon: "💻",
      title: "Experience",
      description: "Full-Stack Development with Java & React"
    },
    {
      icon: "🚀",
      title: "Focus",
      description: "Clean Code & Scalable Solutions"
    },
    {
      icon: "🤝",
      title: "Goal",
      description: "Collaborative Development Team"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Passionate Developer & Problem Solver
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Motivated B. Tech (CSE) student with hands-on experience in full-stack 
                development using Java, Spring Boot, and React.js. Proficient in crafting 
                responsive web interfaces and scalable server-side logic.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Seeking a challenging internship to apply knowledge of clean coding 
                practices and contribute to a collaborative development team.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">Full-Stack Development Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">Modern Technology Stack</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">Clean Code Advocate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl delay-${index * 100}`}
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h4 className="text-white font-semibold mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 glass p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-1">Current Status</h4>
                  <p className="text-gray-400 text-sm">Open for Internship Opportunities</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Projects Completed" },
              { number: "5+", label: "Technologies" },
              { number: "3", label: "Certifications" },
              { number: "2026", label: "Expected Graduation" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
"use client";

import { useState, useEffect, useRef } from "react";

const Education = () => {
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

  const educationDetails = {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    university: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, Uttar Pradesh",
    graduation: "May 2026",
    status: "Expected Graduation"
  };

  const achievements = [
    {
      icon: "🎯",
      title: "Academic Focus",
      description: "Specializing in Full-Stack Development and Software Engineering"
    },
    {
      icon: "💻",
      title: "Practical Learning",
      description: "Hands-on experience with modern development technologies"
    },
    {
      icon: "🚀",
      title: "Project-Based",
      description: "Building real-world applications throughout the curriculum"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working in teams on complex software development projects"
    }
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Development",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Software Testing"
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science with practical application in modern technologies
          </p>
        </div>

        {/* Main Education Card */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* University Logo/Icon */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 mx-auto lg:mx-0">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-400 text-sm font-medium">Currently Enrolled</span>
                    </div>
                    <p className="text-gray-400">{educationDetails.status}</p>
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {educationDetails.degree}
                  </h3>
                  <h4 className="text-xl text-purple-400 mb-4">
                    {educationDetails.field}
                  </h4>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-300 flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {educationDetails.university}
                    </p>
                    <p className="text-gray-300 flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {educationDetails.location}
                    </p>
                    <p className="text-gray-300 flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 0v16m0-16a7 7 0 11-7 7h6m8 0v8m0-8a7 7 0 11-7 7h7z" />
                      </svg>
                      {educationDetails.graduation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Academic Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + (index * 100)}ms` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-white font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Relevant Coursework
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coursework.map((course, index) => (
                <div
                  key={course}
                  className={`bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 text-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + (index * 50)}ms` }}
                >
                  <span className="text-gray-300">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
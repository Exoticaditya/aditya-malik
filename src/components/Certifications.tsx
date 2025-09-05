"use client";

import { useState, useEffect, useRef } from "react";

const Certifications = () => {
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

  const certifications = [
    {
      title: "Java Programming",
      issuer: "Duke University",
      description: "Comprehensive Java programming certification covering object-oriented programming, data structures, and advanced Java concepts.",
      skills: ["Core Java", "OOP Concepts", "Exception Handling", "Collections Framework"],
      icon: "☕",
      color: "from-orange-500 to-red-500",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Email Etiquette",
      issuer: "TCS iON",
      description: "Professional communication certification focusing on effective email writing, business communication, and workplace etiquette.",
      skills: ["Professional Communication", "Business Writing", "Email Management", "Workplace Etiquette"],
      icon: "📧",
      color: "from-blue-500 to-cyan-500",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Presentation Skills",
      issuer: "TCS iON",
      description: "Comprehensive training on effective presentation techniques, public speaking, and visual communication for professional environments.",
      skills: ["Public Speaking", "Visual Design", "Audience Engagement", "Professional Presentation"],
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      status: "Completed",
      year: "2023"
    }
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
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
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certifications and training programs
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Certificate Header */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <div className="flex items-center justify-center mb-2">
                  <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full mr-2`}>
                    {cert.status}
                  </span>
                  <span className="text-gray-400 text-sm">{cert.year}</span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-medium mb-4">
                  {cert.issuer}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">Skills Covered:</h4>
                <div className="space-y-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center bg-white/5 rounded-lg p-2 border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Badge */}
              <div className="text-center">
                <button className={`w-full py-3 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100`}>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Beyond formal certifications, I actively engage in continuous learning through online courses, 
                workshops, and hands-on projects to stay current with industry trends and technologies.
              </p>
            </div>

            {/* Learning Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "3", label: "Certifications Earned", icon: "🏆" },
                { number: "2", label: "Professional Skills", icon: "💼" },
                { number: "1", label: "Technical Certification", icon: "⚡" },
                { number: "∞", label: "Learning Journey", icon: "🚀" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center glass p-6 rounded-xl hover:scale-105 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Learning Goals */}
        <div
          className={`mt-12 transition-all duration-1000 delay-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Upcoming Learning Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced Spring Boot",
                  description: "Microservices architecture and cloud deployment",
                  status: "Planning"
                },
                {
                  title: "React Native",
                  description: "Mobile app development with React ecosystem",
                  status: "In Progress"
                },
                {
                  title: "AWS Certification",
                  description: "Cloud computing and infrastructure management",
                  status: "Planning"
                }
              ].map((goal, index) => (
                <div
                  key={goal.title}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{goal.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      goal.status === "In Progress" 
                        ? "bg-yellow-500/20 text-yellow-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
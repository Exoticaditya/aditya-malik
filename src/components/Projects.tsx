"use client";

import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      title: "Zpluse.com",
      description: "Full-stack business management website built with modern technologies. Features comprehensive business analytics, user management, and real-time data processing.",
      longDescription: "A comprehensive business management platform designed to streamline operations and provide insightful analytics. The application features a responsive React frontend with a robust Spring Boot backend, utilizing PostgreSQL for efficient data management.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs", "Bootstrap"],
      features: [
        "User Authentication & Authorization",
        "Business Analytics Dashboard",
        "Real-time Data Processing",
        "Responsive Design",
        "RESTful API Integration"
      ],
      category: "Full-Stack",
      status: "Completed",
      github: "#",
      live: "#"
    },
    {
      title: "Full-Stack Expense Tracker",
      description: "Comprehensive expense tracking application with intuitive UI and powerful backend. Helps users manage their finances with detailed analytics and reporting features.",
      longDescription: "A modern expense tracking solution that combines the power of React/Next.js frontend with Spring Boot backend and Hibernate ORM for seamless data management and user experience.",
      technologies: ["React.js", "Next.js", "Spring Boot", "Hibernate", "MySQL", "Tailwind CSS"],
      features: [
        "Expense Categorization",
        "Financial Analytics",
        "Monthly/Yearly Reports",
        "Budget Planning",
        "Data Visualization"
      ],
      category: "Financial App",
      status: "Completed",
      github: "#",
      live: "#"
    },
    {
      title: "Online Forum Platform",
      description: "Interactive online forum platform enabling community discussions, user interactions, and content management with a focus on user experience and scalability.",
      longDescription: "A robust forum platform built with Java EE technologies, featuring user authentication, threaded discussions, content moderation, and administrative controls for community management.",
      technologies: ["Java EE", "Servlets", "JSP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User Registration & Profiles",
        "Threaded Discussions",
        "Content Moderation",
        "Search Functionality",
        "Admin Dashboard"
      ],
      category: "Community Platform",
      status: "Completed",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my journey in full-stack development through practical applications and innovative solutions
          </p>
        </div>

        {/* Project Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-2 rounded-xl">
            <div className="flex space-x-2">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeProject === index
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Project Display */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Project Info */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full mr-4">
                    {projects[activeProject].category}
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    {projects[activeProject].status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {projects[activeProject].title}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {projects[activeProject].longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={projects[activeProject].github}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a
                    href={projects[activeProject].live}
                    className="flex items-center px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Features */}
              <div>
                <h4 className="text-white font-semibold mb-6">Key Features</h4>
                <div className="space-y-4">
                  {projects[activeProject].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Project Preview Placeholder */}
                <div className="mt-8 aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Project Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
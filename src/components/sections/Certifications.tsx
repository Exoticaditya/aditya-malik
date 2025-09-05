const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CCP-12345",
    description: "Foundational understanding of AWS Cloud services and architecture",
    icon: "🏅",
    verified: true,
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"]
  },
  {
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "2022",
    credentialId: "META-REACT-6789",
    description: "Advanced React development patterns and best practices",
    icon: "⚛️",
    verified: true,
    skills: ["React", "JSX", "Redux", "React Router"]
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-JS-4567",
    description: "300+ hours of coursework covering ES6, algorithms, and data structures",
    icon: "🏆",
    verified: true,
    skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"]
  },
  {
    title: "Full Stack Web Development",
    issuer: "The Complete Web Developer Course",
    date: "2021",
    credentialId: "UDEMY-FS-8901",
    description: "Comprehensive full-stack development using modern technologies",
    icon: "💻",
    verified: true,
    skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    date: "2023",
    credentialId: "GOOGLE-GA-2345",
    description: "Proficiency in Google Analytics for web analysis",
    icon: "📊",
    verified: true,
    skills: ["Analytics", "Data Analysis", "Web Metrics", "SEO"]
  },
  {
    title: "TypeScript Fundamentals",
    issuer: "Microsoft Learn",
    date: "2022",
    credentialId: "MS-TS-6789",
    description: "Type-safe JavaScript development with TypeScript",
    icon: "🔷",
    verified: true,
    skills: ["TypeScript", "Type Safety", "JavaScript", "Static Typing"]
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {cert.issuer}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {cert.date}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.filter(cert => cert.verified).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Learning Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              4
            </div>
            <div className="text-gray-600 dark:text-gray-400">Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
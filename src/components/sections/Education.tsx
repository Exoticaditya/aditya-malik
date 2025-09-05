const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Technical University",
    location: "India",
    period: "2019 - 2023",
    grade: "8.5 CGPA",
    description: "Focused on software engineering, data structures, algorithms, and web development technologies.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Led university coding club",
      "Winner of inter-college hackathon"
    ]
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science (PCM)",
    institution: "ABC School",
    location: "India",
    period: "2017 - 2019",
    grade: "92%",
    description: "Specialized in Physics, Chemistry, and Mathematics with computer science as additional subject.",
    achievements: [
      "School topper in Computer Science",
      "Participated in national mathematics olympiad",
      "Science club president"
    ]
  }
];

const onlineEducation = [
  {
    course: "Full Stack Web Development",
    platform: "freeCodeCamp",
    period: "2022",
    certificate: true
  },
  {
    course: "React - The Complete Guide",
    platform: "Udemy",
    period: "2022",
    certificate: true
  },
  {
    course: "Node.js & MongoDB Development",
    platform: "Coursera",
    period: "2023",
    certificate: true
  },
  {
    course: "AWS Cloud Practitioner",
    platform: "AWS Training",
    period: "2023",
    certificate: true
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Formal Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.field}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                      {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    {edu.achievements && (
                      <div>
                        <h6 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h6>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center items-center md:items-end">
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-center">
                      <div className="font-semibold">{edu.grade}</div>
                      <div className="text-sm">Grade</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Education & Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Online Learning & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineEducation.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="mb-4">
                  {course.certificate && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {course.course}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {course.platform}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {course.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
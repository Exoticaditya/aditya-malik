export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Passionate Developer with a Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a dedicated software developer with a passion for creating innovative solutions 
              that make a difference. With expertise in modern web technologies, I enjoy turning 
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in technology has led me to work with various frameworks and languages, 
              always staying curious and eager to learn new technologies. I believe in writing 
              clean, efficient code and creating user experiences that are both functional and delightful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300">Technologies</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
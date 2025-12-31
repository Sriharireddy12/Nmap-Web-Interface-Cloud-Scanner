import { Code2, Database, Globe, Server } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express', 'REST API', 'WebSockets'],
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['Supabase', 'PostgreSQL', 'Real-time subscriptions'],
  },
  {
    category: 'Security',
    icon: Code2,
    technologies: ['Nmap Integration', 'JWT Authentication', 'Rate Limiting', 'HTTPS'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About This Project
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A modern web-based network reconnaissance platform built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mission</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Nmap Web Interface (Cloud Scanner) bridges the gap between powerful command-line network
                scanning tools and modern web interfaces. Our mission is to make professional-grade
                security assessment accessible through an intuitive, visual platform.
              </p>
              <p>
                By leveraging cloud infrastructure and real-time data visualization, we enable security
                professionals, network administrators, and researchers to conduct authorized scans with
                unprecedented ease and insight.
              </p>
              <p>
                This project serves as both a practical tool and an educational resource, demonstrating
                best practices in cybersecurity, web development, and responsible disclosure.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Accessibility</h4>
                  <p className="text-gray-600 dark:text-gray-300">No local installation required—access powerful scanning from any modern browser</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Visualization</h4>
                  <p className="text-gray-600 dark:text-gray-300">Transform raw scan data into actionable insights with interactive charts and graphs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Collaboration</h4>
                  <p className="text-gray-600 dark:text-gray-300">Share scan results and reports easily with team members and stakeholders</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Modern UX</h4>
                  <p className="text-gray-600 dark:text-gray-300">Intuitive interface designed for both beginners and security professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <stack.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {stack.category}
                </h4>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

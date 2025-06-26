'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'FinSecurePay - Secure Financial Transaction Platform',
    description: 'A comprehensive backend platform for secure financial transactions with fraud detection, compliance features, and microservice architecture.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'OAuth2', 'JWT', 'Redis', 'Docker', 'scikit-learn'],
    points: [
      'Engineered secure financial backend with FastAPI, PostgreSQL, and OAuth2/JWT authentication',
      'Built 15+ RESTful API endpoints with Pydantic validation and OpenAPI documentation',
      'Implemented fraud detection engine using scikit-learn for real-time transaction analysis',
      'Containerized application with Docker and Docker Compose for consistent deployment',
      'Integrated Redis for scalable session management and rate limiting'
    ],
    github: 'https://github.com/Vamsi-Krishna63/Finsecurepay',
    live: '#'
  },
  {
    title: 'On Demand Professor Q&A Bot',
    description: 'An AI-powered Q&A system using GPT4ALL and vector databases for efficient knowledge retrieval and response generation.',
    technologies: ['GPT4ALL', 'Qdrant', 'SentenceTransformers', 'Docker', 'Python'],
    points: [
      'Deployed Qdrant vector database via Docker for scalable vector storage',
      'Integrated GPT4ALL for localized model training and real-time query expansion',
      'Designed optimized document retrieval pipeline using SentenceTransformers',
      'Implemented API-driven architecture for multi-modal query processing'
    ],
    github: 'https://github.com/Vamsi-Krishna63/On_Demand_Professor-Q-A-Bot',
    live: '#'
  },
  {
    title: 'Project Shield: Clickjacking Protection',
    description: 'A comprehensive security solution to protect web applications from clickjacking attacks.',
    technologies: ['Security Headers', 'CSP', 'X-Frame-Options', 'Web Security'],
    points: [
      'Developed client-side and server-side security measures',
      'Conducted vulnerability assessments and testing',
      'Integrated Content Security Policy headers',
      'Enhanced application security against overlay-based attacks'
    ],
    github: 'https://github.com/Vamsi-Krishna63/Project-Shield-Safeguarding-Against-Deceptive-Attacks-using-Clickjacking',
    live: '#'
  },
  {
    title: 'Neuro-Symbolic Concept Revision',
    description: 'Advanced model interpretability system using Neuro-Symbolic Explanatory Interactive Learning.',
    technologies: ['NeSy XIL', 'Neural Networks', 'Symbolic Reasoning', 'Python'],
    points: [
      'Developed pipeline for Neuro-Symbolic Explanatory Interactive Learning',
      'Achieved 94.96% accuracy on complex datasets',
      'Integrated symbolic reasoning with neural networks',
      'Optimized feature selection using attention-based methods'
    ],
    github: 'https://github.com/Vamsi-Krishna63/Neuro-Symbolic-Concept-Revision-Using-Interactive-Explanations',
    live: '#'
  },
  {
    title: 'LLM Privacy Evaluation Framework',
    description: 'A comprehensive framework for evaluating and enhancing privacy in Large Language Models.',
    technologies: ['LLaMA2', 'Mistral', 'Ollama', 'Python', 'Privacy Tech'],
    points: [
      'Implemented multiple attack vectors for privacy vulnerability testing',
      'Developed automated attack execution and analysis pipeline',
      'Engineered defensive prompting modules with 100% mitigation rate',
      'Optimized execution with GPU offloading and batch inference'
    ],
    github: 'https://github.com/Vamsi-Krishna63/LLM-Privacy-Evaluation-Defense-Framework',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
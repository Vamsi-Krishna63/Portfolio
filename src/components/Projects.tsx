'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
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
    github: 'https://github.com/Vamsi-Krishna/qa-bot',
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
    github: 'https://github.com/Vamsi-Krishna/project-shield',
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
    github: 'https://github.com/Vamsi-Krishna/nesy-concept-revision',
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
    github: 'https://github.com/Vamsi-Krishna/llm-privacy',
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
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
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
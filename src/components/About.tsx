'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGithub, FaLinux, FaPython, FaReact, FaCloud, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaWindows, FaMicrophone, FaServer, FaCode, FaFileAlt } from 'react-icons/fa';
import { SiJenkins, SiMongodb, SiMysql, SiTailwindcss, SiTypescript, SiPytorch, SiJupyter, SiDjango, SiKubernetes, SiBootstrap, SiPowers, SiTableau, SiVk, SiHuggingface, SiScikitlearn, SiGitlab, SiC, SiMacos, SiChartdotjs } from 'react-icons/si';

const skills = [
  // Programming Languages
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'C', icon: SiC },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  
  // Web Development
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Django', icon: SiDjango },
  { name: 'Flask', icon: SiJupyter },
  { name: 'Bootstrap 5', icon: SiBootstrap },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  
  // Databases
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Qdrant', icon: SiJupyter },
  { name: 'NoSQL', icon: SiMongodb },
  
  // Cloud Technologies
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaCloud },
  { name: 'Lambda', icon: FaAws },
  { name: 'S3', icon: FaAws },
  { name: 'EC2', icon: FaAws },
  { name: 'Redshift', icon: FaAws },
  { name: 'VMSS', icon: FaCloud },
  { name: 'Blob Storage', icon: FaCloud },
  
  // DevOps & CI/CD
  { name: 'Docker', icon: FaDocker },
  { name: 'Jenkins', icon: SiJenkins },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'GitLab', icon: SiGitlab },
  
  // AI/ML Frameworks
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Hugging Face', icon: SiHuggingface },
  { name: 'SentenceTransformers', icon: SiHuggingface },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'NLP', icon: SiJupyter },
  { name: 'NER', icon: SiJupyter },
  { name: 'LLMs', icon: SiJupyter },
  
  // Platforms & IDEs
  { name: 'Linux', icon: FaLinux },
  { name: 'Windows', icon: FaWindows },
  { name: 'MacOS', icon: SiMacos },
  { name: 'VS Code', icon: FaCode },
  { name: 'Eclipse', icon: FaServer },
  
  // Visualization Tools
  { name: 'PowerBI', icon: SiPowers },
  { name: 'Tableau', icon: SiTableau },
  { name: 'Matplotlib', icon: SiChartdotjs },
  { name: 'Excel', icon: FaFileAlt },
  
  // Speech Recognition
  { name: 'Whisper', icon: FaMicrophone },
  { name: 'Vosk', icon: SiVk },
  
  // Web Technologies
  { name: 'REST APIs', icon: FaJs },
  { name: 'FormData API', icon: FaJs },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Software Engineer with hands-on experience in full-stack web development, cloud infrastructure,
            and AI-integrated applications. Skilled in Python, Java, React, Flask, and RESTful API design with strong
            DevOps knowledge using Docker, Jenkins, and Git. Proven success in building secure, scalable systems across
            Microsoft Azure and AWS environments. Developed advanced solutions integrating LLMs, Whisper-based
            speech recognition, and semantic search using SentenceTransformers and Qdrant. Certified in Azure
            Developer (AZ-204), and Oracle Cloud, with a strong focus on backend development, system security, and
            intelligent data-driven applications.
          </p>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <skill.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://drive.google.com/file/d/1IBgpSBmL1jREHGdVTVeEvM_QsFQyKhup/view?usp=drive_link"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
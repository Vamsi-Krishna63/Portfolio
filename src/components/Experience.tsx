'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Indpendent Reseracher',
    UnderSupervision:'Prof. Akbar Siami Namin, Ph.D',
    company: 'Texas Tech University',
    period: 'April 2024 - May 2025',
    description: [
      'Conducted applied research in Sensitive Data Detection, integrating Speech-to-Text (STT) systems with Large Language Models (LLMs) to identify sensitive information in unstructured text and audio.',
      'Engineered a full-stack Python web application combining Flask, HTML5, CSS3, and Bootstrap for real-time processing of audio and text data with sensitive information detection.',
      'Developed a dual-model sensitive data detection framework using traditional pattern matching (regex, Word2Vec similarity) and LLM-based contextual analysis powered by Meta-Llama-3-8B-Instruct.',
      'Implemented speech recognition pipelines utilizing OpenAI Whisper with GPU acceleration via PyTorch, enabling real-time transcription from microphone inputs and audio file uploads.',
      'Built a Qdrant vector database for efficient semantic similarity search of sensitive terms based on Word2Vec embeddings, enhancing approximate matching and classification performance.',
      'Designed and deployed an adaptive feedback mechanism that dynamically refines detection models based on user corrections, ensuring continuous learning and accuracy improvement. Integrated text pre-processing techniques such as tokenization, stemming, lemmatization, stop-word removal, and TF-IDF vectorization to enhance feature extraction.',
      'Integrated Transformer-based NER models like BERT fine-tuned and DistilBERT model for entity recognition and Zero-shot classification models (Facebook/BART-large-MNLI) to augment semantic understanding and context analysis.',
      'Conducted comparative analysis between traditional methods and LLM-based methods, improving detection accuracy and reducing false positives through confidence scoring and overlap analysis.',
      'Developed interactive data visualization dashboards and downloadable analysis reports to streamline user interpretation of sensitive data detection results.',
    ],
  },
  {
    title: 'Associate Professional Software Engineer',
    company: 'DXC Technology',
    period: 'May 2023 - Dec 2023',
    description: [
      'The team executes VM (virtual machine) and physical server OS patching operations for security purposes while maintaining stability and industry compliance.',
      'The software developer has expertise in Azure VM OS patching and troubleshooting while also deploying automated deployment of patches to enhance system performance.',
      'A total of 95% of system complex issues on CentOS and RHEL systems were successfully resolved by my troubleshooting efforts. The system performance and reliability gain improvement through automated patch deployment methods.',
      'The professional maintains a specialization in infrastructure management where they excel at complex infrastructure design work and maintenance tasks in Linux, VMware, and AIX environments.',
      'My expertise includes detailed understanding of virtualization along with Microsoft Azure and other services such as VMware ESXi, Hyper-V, and IBM AIX virtualization.',
      'Experienced in Azure Virtual Network infrastructure creation as well as Network Security Group deployment, VM Scaling (VMSS), and Load Balancer configurations to optimize cloud performance.',
      'Security policies are implemented with three core components: SSH key management, role-based access control (RBAC), and access control methods.',
      'Worked with DevOps tools such as Jenkins, Docker, and Git, contributing to CI/CD pipeline development, containerized application deployment, and version control best practices.',
    ],
  },
  /* Commented out Junior Software Intern experience
  {
    title: 'Junior Software Intern',
    company: 'Sola Info IT Solutions Pvt Ltd',
    period: 'Apr 2022 - Mar 2023',
    description: [
      'Managed Azure cloud infrastructure including VMs, Storage, and Virtual Networks.',
      'Administered Linux systems with focus on RHEL.',
      'Configured networking resources including Load Balancers and Security Groups.',
      'Developed automated infrastructure solutions using Ansible and PowerShell.',
    ],
  },
  */
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-blue-600 transform -translate-x-1/2"></div>

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-1.5"></div>

              {/* Content */}
              <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'
              }`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {experience.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {experience.period}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
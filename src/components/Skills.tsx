'use client';

import { motion } from 'framer-motion';
import { FaReact, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch, SiRedis } from 'react-icons/si';
import { RiLockPasswordLine, RiShieldLine } from 'react-icons/ri';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: FaPython, level: 95 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { name: 'Redis', icon: SiRedis, level: 80 },
      { name: 'OAuth2', icon: RiLockPasswordLine, level: 85 },
      { name: 'JWT', icon: RiShieldLine, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'AWS', icon: FaAws, level: 85 },
      { name: 'Docker', icon: FaDocker, level: 80 },
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 90 },
      { name: 'PyTorch', icon: SiPytorch, level: 85 },
      { name: 'Git', icon: FaGitAlt, level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuously learning and exploring new technologies to stay at the forefront of software development.
            Always excited to take on new challenges and expand my skill set.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
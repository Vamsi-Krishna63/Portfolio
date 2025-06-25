'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Sciences in Computer Science',
    institution: 'Texas Tech University',
    location: 'Lubbock',
    period: 'Jan 2024 – May 2025',
    gpa: '3.9/4.0',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Annamacharya Institute of Technology and Sciences',
    location: 'Tirupati',
    period: 'Jun 2018 – Jun 2022',
    gpa: '8.23/10.0',
  },
];

const certifications = [
  {
    name: 'Az 204 - Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/vamsikrishna-1156/64037F0636784C77?sharingId=6DA3581776C7D745',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/users/vamsikrishna-1156/credentials/443db5a231504091?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Oracle Cloud Infrastructure 2022 Certified Foundation Associate',
    issuer: 'Oracle',
    link: 'https://www.linkedin.com/in/vamsi-krishna-koppala-3b2088194/details/certifications/1746744985929/single-media-viewer?type=DOCUMENT&profileId=ACoAAC2SwDYBOinEaPFWgRqJyHSb9VsYt1d49Ws&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BuIl0RzBTRFWWDfb2RmYk%2FQ%3D%3D',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaGraduationCap className="w-6 h-6 mr-2 text-blue-600" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                  <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaCertificate className="w-6 h-6 mr-2 text-blue-600" />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    Issued by {cert.issuer}
                  </p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="mr-2">View Certificate</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
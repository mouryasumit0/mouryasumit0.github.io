'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo, skills } from '@/data/portfolio';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Sumit_Mourya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Passionate Backend Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {personalInfo.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  With a strong foundation in modern web technologies and a passion for clean, efficient code, 
                  I enjoy tackling complex problems and turning ideas into scalable solutions. I&apos;m always 
                  eager to learn new technologies and collaborate with teams to build amazing products.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="text-primary-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail size={20} className="text-primary-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Phone size={20} className="text-primary-600" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              
              <div className="space-y-6">
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    variants={itemVariants}
                    className="space-y-3"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

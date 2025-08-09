'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration}</p>
              </div>
              <p className="mt-1 text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

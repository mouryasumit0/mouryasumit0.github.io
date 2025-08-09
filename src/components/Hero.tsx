'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Sumit_Mourya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-100 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary-600 dark:text-primary-400 font-medium text-lg"
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
              >
                {personalInfo.role}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
              >
                {personalInfo.tagline}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={scrollToAbout}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={downloadResume}
                  className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-8xl font-bold">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* Uncomment when you have your profile image */}
                {/* <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="rounded-full object-cover"
                  priority
                /> */}
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;

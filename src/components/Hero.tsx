'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
              <Image
                src="/profile-picture.svg"
                alt="Cossette Alexis Gabuya"
                fill
                className="rounded-full object-cover border-4 border-primary-200 dark:border-primary-700"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Cossette Alexis
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-secondary-600 dark:text-secondary-400 mb-6 max-w-4xl mx-auto"
          >
            Software Developer & Python Specialist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-secondary-700 dark:text-secondary-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Certified Associate in Python Programming with expertise in Django, Django REST Framework, and building scalable web applications. Specialized in backend development, API design, and system integration.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button className="btn-primary flex items-center gap-2 text-base px-6 py-3">
              <Download className="h-5 w-5" />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/cossettealexis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/cossette-alexis-gabuya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:gabuyacossettealexis@gmail.com"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <ArrowDown className="h-8 w-8 mx-auto text-primary-600 dark:text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

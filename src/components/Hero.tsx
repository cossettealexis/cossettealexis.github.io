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
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
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
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Cossette Alexis
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl text-secondary-600 dark:text-secondary-400 mb-10 max-w-4xl mx-auto"
          >
            Software Developer & Python Specialist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-secondary-700 dark:text-secondary-300 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Certified Associate in Python Programming with expertise in Django, Django REST Framework, and building scalable web applications. Specialized in backend development, API design, and system integration.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="btn-primary flex items-center gap-3 text-xl px-10 py-5">
              <Download className="h-6 w-6" />
              Download Resume
            </button>
            
            <div className="flex gap-6">
              <a
                href="https://github.com/cossettealexis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/cossette-alexis-gabuya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:gabuyacossettealexis@gmail.com"
                className="p-4 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <ArrowDown className="h-10 w-10 mx-auto text-primary-600 dark:text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

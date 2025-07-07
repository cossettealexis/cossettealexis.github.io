'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Experienced in both frontend and backend technologies, creating complete web solutions.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Passionate about creating beautiful, intuitive interfaces that users love.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Focused on building fast, efficient applications with optimal user experience.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication skills and experience working in agile development teams.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-secondary-900">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              I'm a passionate full stack developer who loves creating digital experiences that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-secondary-800 dark:text-secondary-200">
                My Story
              </h3>
              <div className="space-y-6 text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 leading-relaxed">
                <p>
                  Hello! I'm Cossette Alexis, a dedicated full stack developer with a passion for creating 
                  innovative web solutions. My journey in tech began with curiosity about how websites work, 
                  and has evolved into a deep love for building applications that solve real-world problems.
                </p>
                <p>
                  I specialize in modern web technologies including React, Django, and cloud services. 
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through blog posts and technical articles.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="card p-8 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg mb-6">
                      <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 dark:text-secondary-200 mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-secondary-800 dark:text-secondary-200">
              Fun Facts About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="card p-8">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  3+
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Years of Experience
                </p>
              </div>
              <div className="card p-8">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  50+
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Projects Completed
                </p>
              </div>
              <div className="card p-8">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  24/7
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Learning New Things
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

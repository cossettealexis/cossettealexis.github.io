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
      title: 'Backend Development',
      description: 'Specialized in Django, Python, and Django REST Framework for scalable backend systems.',
    },
    {
      icon: Palette,
      title: 'API Development',
      description: 'Expert in designing and building RESTful APIs with proper authentication and security.',
    },
    {
      icon: Zap,
      title: 'Database Optimization',
      description: 'Experienced in PostgreSQL, MySQL, and Oracle with focus on performance optimization.',
    },
    {
      icon: Users,
      title: 'System Integration',
      description: 'Skilled in integrating third-party services and modernizing legacy systems.',
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              Certified Associate in Python Programming with hands-on experience in developing scalable, secure, and high-performance web applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                My Story
              </h3>
              <div className="space-y-4 text-sm md:text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                <p>
                  Hello! I'm Cossette Alexis Gabuya, a dedicated Software Developer with a Computer Engineering 
                  background from the University of Cebu. I'm a Certified Associate in Python Programming with 
                  hands-on experience in developing scalable, secure, and high-performance web applications and APIs.
                </p>
                <p>
                  I specialize in Django, Python, and Django REST Framework (DRF), with proficiency in designing 
                  and optimizing backend systems, building RESTful APIs, and integrating third-party services to 
                  enhance system functionality. I'm also skilled in modern frontend technologies including ReactJS and Angular.
                </p>
                <p>
                  Throughout my career, I've maintained and improved existing codebases while ensuring code quality, 
                  performance, and scalability. I'm passionate about creating solutions that solve real-world problems 
                  and have maintained over 90% client satisfaction in my freelance projects.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-base md:text-lg text-secondary-800 dark:text-secondary-200 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-secondary-800 dark:text-secondary-200">
              Fun Facts About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  5+
                </div>
                <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400">
                  Years of Experience
                </p>
              </div>
              <div className="card p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  15+
                </div>
                <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400">
                  Projects Completed
                </p>
              </div>
              <div className="card p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  90%+
                </div>
                <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

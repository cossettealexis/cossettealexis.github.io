'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

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
    <section id="skills" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-8"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-secondary-800 dark:text-secondary-200">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300">
                          {skill.name}
                        </span>
                        <span className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

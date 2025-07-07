'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, Trophy, Star } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Award' | 'Achievement';
  description: string;
  skills?: string[];
  credentialUrl?: string;
  icon: 'award' | 'trophy' | 'star';
}

export function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Certified Associate in Python Programming",
      issuer: "Python Institute",
      date: "2023",
      type: "Certification",
      description: "Professional certification demonstrating proficiency in Python programming fundamentals, data structures, object-oriented programming, and advanced Python concepts.",
      skills: ["Python", "Object-Oriented Programming", "Data Structures", "Algorithms", "Exception Handling", "File Operations"],
      icon: "award"
    },
    {
      id: 2,
      title: "Game Development Competition - Best Game Award",
      issuer: "University of Cebu",
      date: "2020",
      type: "Award",
      description: "Recognized for excellence in game development, showcasing creativity, technical skills, and innovative gameplay mechanics in a competitive university environment.",
      skills: ["Game Development", "Programming", "Creative Design", "Problem Solving"],
      icon: "trophy"
    }
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

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'award':
        return Award;
      case 'trophy':
        return Trophy;
      case 'star':
        return Star;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Certification':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'Award':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400';
      case 'Achievement':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      default:
        return 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400';
    }
  };

  return (
    <section id="certifications" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Certifications & <span className="text-gradient">Awards</span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              Professional certifications and recognitions that validate my expertise and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {certifications.map((cert) => {
              const IconComponent = getIcon(cert.icon);
              return (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="card p-10 hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(cert.type)}`}>
                          {cert.type}
                        </span>
                        <div className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-lg">{cert.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary-800 dark:text-secondary-200 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 mb-8 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  {cert.skills && (
                    <div className="mb-8">
                      <h4 className="text-lg md:text-xl font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                        Related Skills:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg text-base font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Credential Link */}
                  {cert.credentialUrl && (
                    <div className="pt-6 border-t border-secondary-200 dark:border-secondary-700">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium text-lg"
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Credential
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="card p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {certifications.filter(c => c.type === 'Certification').length}
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Professional Certifications
                </p>
              </div>
              <div className="card p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {certifications.filter(c => c.type === 'Award').length}
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Awards & Recognition
                </p>
              </div>
              <div className="card p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {new Set(certifications.flatMap(c => c.skills || [])).size}
                </div>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400">
                  Validated Skills
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

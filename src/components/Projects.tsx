'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  image: string;
  github_url: string;
  live_url: string;
  technologies: string[];
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-secondary-200 dark:bg-secondary-700 rounded-lg h-64"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div variants={itemVariants} className="mb-20">
              <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-secondary-800 dark:text-secondary-200">
                Featured Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-56 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                        {project.title}
                      </h4>
                      <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                        {project.short_description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-lg"
                          >
                            <Github className="h-5 w-5" />
                            Code
                          </a>
                        )}
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 text-lg"
                          >
                            <ExternalLink className="h-5 w-5" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-secondary-800 dark:text-secondary-200">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-40 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl md:text-2xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                        {project.title}
                      </h4>
                      <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                        {project.short_description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-base"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 rounded-full text-base">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded text-lg transition-colors duration-200"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        )}
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded text-lg transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

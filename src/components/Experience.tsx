'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, ExternalLink, Github, Users, Trophy, Code } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  description: string;
  responsibilities: string[];
  projects: Project[];
  skills: string[];
  achievements: string[];
}

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Freelancer",
      position: "Freelance Software Developer",
      location: "Remote",
      startDate: "2023-06",
      endDate: "2025-06",
      duration: "2 years",
      type: "Freelance",
      description: "Handled diverse projects for multiple clients with overall client satisfaction above 90%. Specialized in Django, Python, and Django REST Framework development.",
      responsibilities: [
        "Developed scalable, secure, and high-performance web applications and APIs",
        "Designed and optimized backend systems using Django and Django REST Framework",
        "Built RESTful APIs and integrated third-party services to enhance system functionality",
        "Maintained and improved existing codebases while ensuring code quality and performance",
        "Managed client relationships and delivered projects on time with high satisfaction rates"
      ],
      projects: [
        {
          name: "PFI Web Application",
          description: "Web-based application designed for PFI's agent staff and administrators with role-based platform for tailored user experience",
          technologies: ["Django", "Tailwind", "Django REST Framework", "PostgreSQL"],
          achievements: [
            "Implemented role-based access for user's tailored experience",
            "Implemented REST API with JWT Authentication for future integration",
            "Ground-up development completed in 2 months"
          ]
        },
        {
          name: "Juddoc - Contract Management System",
          description: "A contract management system designed to simplify and automate the entire contract lifecycle",
          technologies: ["Python", "Django", "Django REST Framework", "AWS", "PostgreSQL", "Azure AI", "Kendra", "Vertex AI"],
          achievements: [
            "Leveraged LLM for better search capabilities using Kendra, Azure AI, and Vertex AI",
            "Integrated e-signature tools (DocuSign, Zoho Sign, Adobe Acrobat Sign)",
            "Automated report generation processes, improving efficiency and reducing manual workload"
          ]
        },
        {
          name: "Vooz - Mobile Polling System",
          description: "Mobile application polling system that allows users to share their opinions and participate in polls",
          technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
          achievements: [
            "Developed entire backend API for poll creation, voting, and result tracking",
            "Implemented user authentication and authorization for secure access",
            "Built admin web interface for managing polls, users, and system configurations",
            "Integrated rate limiting and load balancing support for high traffic"
          ]
        },
        {
          name: "Backoffice - Health Surveillance System",
          description: "Web application used by administrators to manage health surveillance in New Zealand",
          technologies: ["Django", "Angular", "TypeScript"],
          achievements: [
            "Implemented admin portal from ground up with customized features",
            "Designed calendar system that mimics Outlook Calendar for surveyor appointments",
            "Integrated calendar with API for video survey links and seamless video appointments"
          ]
        },
        {
          name: "Real Estate Portal",
          description: "Web application for managing real estate listings, agents, and property inquiries",
          technologies: ["Django", "Django REST Framework", "ReactJS", "AWS"],
          achievements: [
            "Implemented both frontend and backend APIs with seamless integration",
            "Built property management, user authentication, and search functionalities",
            "Developed admin interface and dynamic frontend for real-time data display",
            "Setup EC2 instance in AWS and logging in CloudWatch"
          ]
        }
      ],
      skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "AWS", "ReactJS", "Angular", "TypeScript"],
      achievements: [
        "Maintained 90%+ client satisfaction rate across all projects",
        "Delivered 6+ major projects on time and within budget",
        "Specialized in full-stack development with Django and modern frontend frameworks"
      ]
    },
    {
      id: 2,
      company: "Alliance Software Inc.",
      position: "Software Developer",
      location: "Hybrid",
      startDate: "2021-01",
      endDate: "2025-01",
      duration: "4 years",
      type: "Full-time",
      description: "Developed and maintained enterprise-level applications using Django, Python, and various frontend technologies. Focused on backend API development, database optimization, and system modernization.",
      responsibilities: [
        "Developed scalable web applications using Django and Django REST Framework",
        "Implemented RESTful API layers and modernized legacy systems",
        "Performed database migrations and optimizations from Oracle to PostgreSQL",
        "Built comprehensive unit tests to ensure backend reliability and prevent regressions",
        "Contributed to frontend development using ReactJS and Angular frameworks",
        "Maintained existing codebases and implemented new features based on client requirements"
      ],
      projects: [
        {
          name: "Keypro - Network Information System",
          description: "Network information system used to digitize and manage telecom and utility networks",
          technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Oracle", "ExtJS", "ReactJS"],
          achievements: [
            "Implemented REST API layer, modernizing legacy Django function-based views",
            "Migrated data from Oracle to PostgreSQL, improving performance and maintainability",
            "Developed comprehensive unit tests for backend reliability",
            "Contributed to frontend migration from ExtJS to ReactJS"
          ]
        },
        {
          name: "eSNDP - Franchising Operations",
          description: "Web application for managing a food company's franchising operations and tracking key store performance indicators",
          technologies: ["PHP", "Drupal"],
          achievements: [
            "Performed bug fixes and implemented enhancements to improve business logic",
            "Improved system performance and maintained code stability",
            "Supported ongoing feature improvements within Drupal-based architecture"
          ]
        }
      ],
      skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Oracle", "ReactJS", "ExtJS", "PHP", "Drupal"],
      achievements: [
        "Successfully modernized legacy systems to current technology standards",
        "Completed complex database migration from Oracle to PostgreSQL",
        "Contributed to both backend and frontend development across multiple projects"
      ]
    },
    {
      id: 3,
      company: "MACH 95",
      position: "Software Developer",
      location: "Full-time",
      startDate: "2020-06",
      endDate: "2020-12",
      duration: "7 months",
      type: "Full-time",
      description: "Contributed to full-stack development projects focusing on e-commerce and business management systems using Django, VueJS, and various web technologies.",
      responsibilities: [
        "Developed both backend and frontend features for web applications",
        "Implemented business logic and system functionality improvements",
        "Performed bug fixes and system enhancements",
        "Contributed to maintaining code stability and supporting feature improvements",
        "Worked with multiple technology stacks including Django, VueJS, and PHP/Drupal"
      ],
      projects: [
        {
          name: "BiisBenta - Dropshipping Platform",
          description: "A dropshipping website that enables users to manage products, orders, and fulfillment with ease",
          technologies: ["Django", "VueJS"],
          achievements: [
            "Contributed to both backend and frontend features",
            "Improved overall system functionality and user experience",
            "Built ground-up e-commerce solution from scratch"
          ]
        }
      ],
      skills: ["Django", "VueJS", "Python", "JavaScript", "HTML/CSS"],
      achievements: [
        "Successfully delivered full-stack e-commerce platform",
        "Contributed to improving system functionality and user experience",
        "Gained experience in modern web development technologies"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-secondary-900">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              My journey through different companies and the impactful projects I've delivered
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-32 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-900 shadow-lg"></div>

                <div className="ml-20">
                  <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                    {/* Company Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Building className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          <h3 className="text-xl md:text-2xl font-bold text-secondary-800 dark:text-secondary-200">
                            {experience.company}
                          </h3>
                        </div>
                        
                        <h4 className="text-lg md:text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                          {experience.position}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-secondary-600 dark:text-secondary-400 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                          </div>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-base">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl md:text-2xl font-semibold text-secondary-700 dark:text-secondary-300">
                          {experience.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-8">
                      <h5 className="text-lg md:text-xl font-semibold text-secondary-800 dark:text-secondary-200 mb-4 flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        Key Responsibilities
                      </h5>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-secondary-600 dark:text-secondary-400">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div className="mb-8">
                      <h5 className="text-lg md:text-xl font-semibold text-secondary-800 dark:text-secondary-200 mb-4 flex items-center gap-3">
                        <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        Key Projects
                      </h5>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {experience.projects.map((project, idx) => (
                          <div key={idx} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-3">
                              <h6 className="text-base md:text-lg font-semibold text-secondary-800 dark:text-secondary-200">
                                {project.name}
                              </h6>
                              {project.links && (
                                <div className="flex gap-3">
                                  {project.links.github && (
                                    <a
                                      href={project.links.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                                    >
                                      <Github className="h-5 w-5" />
                                    </a>
                                  )}
                                  {project.links.live && (
                                    <a
                                      href={project.links.live}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                                    >
                                      <ExternalLink className="h-5 w-5" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                            
                            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-base"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {project.achievements && (
                              <div>
                                <div className="text-lg font-medium text-secondary-800 dark:text-secondary-200 mb-3">
                                  Achievements:
                                </div>
                                <ul className="space-y-2">
                                  {project.achievements.map((achievement, achievementIdx) => (
                                    <li key={achievementIdx} className="flex items-start gap-2 text-base md:text-lg text-secondary-600 dark:text-secondary-400">
                                      <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills & Achievements */}
                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Skills */}
                      <div>
                        <h5 className="text-xl md:text-2xl font-semibold text-secondary-800 dark:text-secondary-200 mb-6">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg text-lg font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-xl md:text-2xl font-semibold text-secondary-800 dark:text-secondary-200 mb-6">
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
                              <Trophy className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

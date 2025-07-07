'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/cossettealexis',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/cossette-alexis-gabuya',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:cossettealexis@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl md:text-4xl font-bold text-gradient mb-6 block">
              Cossette Alexis
            </Link>
            <p className="text-xl md:text-2xl text-secondary-400 mb-8 max-w-md leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and sharing knowledge through code and content.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-2xl">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xl text-secondary-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-2xl">Stay Updated</h3>
            <p className="text-secondary-400 mb-6 text-lg leading-relaxed">
              Subscribe to get notified about new blog posts and projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400 text-lg"
              />
              <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-800 mt-12 pt-12 text-center">
          <p className="text-secondary-400 text-lg md:text-xl">
            © {currentYear} Cossette Alexis Gabuya. Made with{' '}
            <Heart className="inline h-5 w-5 text-red-500 fill-current" /> using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

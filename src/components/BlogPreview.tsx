'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  category: {
    name: string;
    slug: string;
  } | null;
  tags: {
    name: string;
    slug: string;
    color: string;
  }[];
  published_at: string;
  reading_time: number;
  views: number;
}

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog?per_page=3');
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <section id="blog" className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
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
    <section id="blog" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Blog Posts</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto">
              I write about web development, technology trends, and my learning journey.
            </p>
          </motion.div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="card group overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 mb-6">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {post.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-primary-600 text-white text-lg rounded-full">
                          {post.category.name}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.slug}
                          className="px-3 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 text-base rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-3 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 text-base rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-lg text-secondary-500 dark:text-secondary-400 mb-6">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          <span>{post.reading_time} min</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-3 text-xl text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div variants={itemVariants} className="text-center py-16">
              <p className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-400 mb-6">
                No blog posts available at the moment.
              </p>
              <p className="text-xl md:text-2xl text-secondary-500 dark:text-secondary-500">
                Check back soon for new content!
              </p>
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center gap-3 text-xl px-10 py-5"
            >
              View All Posts
              <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

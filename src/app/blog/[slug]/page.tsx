'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Eye, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
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
  author: {
    username: string;
    first_name: string;
    last_name: string;
  };
  published_at: string;
  updated_at: string;
  reading_time: number;
  views: number;
}

export default function BlogPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // For now, we'll use mock data based on the slug
        const mockPosts = [
          {
            id: 1,
            title: "Building Modern Web Applications with React and Django",
            slug: "building-modern-web-applications-react-django",
            content: `
# Building Modern Web Applications with React and Django

In this comprehensive guide, we'll explore how to build modern, scalable web applications using React for the frontend and Django for the backend API.

## Why React and Django?

React and Django make a powerful combination for full-stack development:

- **React**: Provides a dynamic, interactive user interface
- **Django**: Offers a robust, scalable backend with excellent ORM
- **Separation of Concerns**: Clean architecture with distinct frontend and backend

## Setting Up the Development Environment

First, let's set up our development environment. You'll need Node.js for React and Python for Django.

### Installing Node.js and npm

\`\`\`bash
# Install Node.js (includes npm)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
\`\`\`

### Setting up Python and Django

\`\`\`bash
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install Django
pip install django djangorestframework django-cors-headers
\`\`\`

## Creating the Django Backend

We'll start by creating our Django API that will serve data to our React frontend.

### Project Structure

\`\`\`
backend/
├── manage.py
├── backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── api/
    ├── __init__.py
    ├── models.py
    ├── views.py
    ├── serializers.py
    └── urls.py
\`\`\`

### Creating Models

\`\`\`python
# api/models.py
from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
\`\`\`

## Building the React Frontend

Next, we'll create our React application that will consume the Django API.

### Creating the React App

\`\`\`bash
npx create-react-app frontend
cd frontend
npm install axios  # For API calls
\`\`\`

### Connecting to Django API

\`\`\`javascript
// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(\`\${API_BASE_URL}/posts/\`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};
\`\`\`

## Deployment Strategies

When it comes to deploying your React and Django application, you have several options:

### Option 1: Separate Deployments

- **Frontend**: Deploy React app to Vercel, Netlify, or GitHub Pages
- **Backend**: Deploy Django API to Heroku, DigitalOcean, or AWS

### Option 2: Containerized Deployment

Use Docker to containerize both applications:

\`\`\`dockerfile
# Dockerfile for Django
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
\`\`\`

## Best Practices

1. **API Design**: Use RESTful principles for your Django API
2. **Error Handling**: Implement proper error handling on both frontend and backend
3. **Authentication**: Use JWT tokens for secure authentication
4. **Testing**: Write tests for both React components and Django views
5. **Performance**: Optimize database queries and implement caching

## Conclusion

Building modern web applications with React and Django provides a powerful, scalable solution for full-stack development. The combination allows for rapid development while maintaining clean separation of concerns.

Remember to:
- Keep your API endpoints RESTful and well-documented
- Use proper state management in React (Redux, Context API, or Zustand)
- Implement proper error handling and loading states
- Follow security best practices for authentication and data validation

Happy coding!
            `,
            excerpt: "Learn how to create full-stack applications using React for the frontend and Django for the backend API.",
            featured_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: {
              name: "Web Development",
              slug: "web-development"
            },
            tags: [
              { name: "React", slug: "react", color: "#61DAFB" },
              { name: "Django", slug: "django", color: "#092E20" },
              { name: "Full Stack", slug: "full-stack", color: "#FF6B6B" }
            ],
            author: {
              username: "cossettealexis",
              first_name: "Cossette",
              last_name: "Alexis"
            },
            published_at: "2024-01-15T10:00:00Z",
            updated_at: "2024-01-15T10:00:00Z",
            reading_time: 8,
            views: 1250
          }
        ];

        const foundPost = mockPosts.find(p => p.slug === params.slug);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
      } catch (error) {
        setError('Error loading post');
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 text-secondary-800 dark:text-secondary-200">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3 mt-8 text-secondary-800 dark:text-secondary-200">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-2 mt-6 text-secondary-800 dark:text-secondary-200">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-secondary-800 dark:text-secondary-200">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="bg-secondary-100 dark:bg-secondary-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono">$2</code></pre>')
      .replace(/^- (.*$)/gm, '<li class="mb-1 text-secondary-700 dark:text-secondary-300">$1</li>')
      .replace(/(<li.*<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-1">$1</ul>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">')
      .replace(/^(?!<[h|u|p|c])(.*$)/gm, '<p class="mb-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">$1</p>');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-secondary-900 pt-20">
        <div className="container-max section-padding">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-3/4 mb-6"></div>
            <div className="h-64 bg-secondary-200 dark:bg-secondary-700 rounded mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-secondary-900 pt-20">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl font-bold mb-6 text-secondary-800 dark:text-secondary-200">
            {error || 'Post Not Found'}
          </h1>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 pt-20">
      <div className="container-max section-padding">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              {post.category && (
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  {post.category.name}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-800 dark:text-secondary-200 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-600 dark:text-secondary-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
            </div>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3" />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  {post.author.first_name?.[0]}{post.author.last_name?.[0]}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800 dark:text-secondary-200">
                  {post.author.first_name} {post.author.last_name}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Full Stack Developer & Tech Enthusiast
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

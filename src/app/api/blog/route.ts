import { NextRequest, NextResponse } from 'next/server';

// Mock data for demonstration - in a real app, this would come from a database
const mockBlogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and Django",
    slug: "building-modern-web-applications-react-django",
    excerpt: "Learn how to create full-stack applications using React for the frontend and Django for the backend API.",
    content: `
# Building Modern Web Applications with React and Django

In this comprehensive guide, we'll explore how to build modern, scalable web applications using React for the frontend and Django for the backend API.

## Why React and Django?

React and Django make a powerful combination for full-stack development:

- **React**: Provides a dynamic, interactive user interface
- **Django**: Offers a robust, scalable backend with excellent ORM
- **Separation of Concerns**: Clean architecture with distinct frontend and backend

## Setting Up the Development Environment

First, let's set up our development environment...

## Creating the Django Backend

We'll start by creating our Django API...

## Building the React Frontend

Next, we'll build our React application...

## Deployment Strategies

Finally, we'll discuss deployment options...
    `,
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
    published_at: "2024-01-15T10:00:00Z",
    reading_time: 8,
    views: 1250,
    author: {
      username: "cossettealexis",
      first_name: "Cossette",
      last_name: "Alexis"
    }
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: Tips and Best Practices",
    slug: "mastering-tailwind-css-tips-best-practices",
    excerpt: "Discover advanced techniques and best practices for using Tailwind CSS in your projects.",
    content: `
# Mastering Tailwind CSS: Tips and Best Practices

Tailwind CSS has revolutionized the way we think about CSS and styling web applications. In this post, we'll explore advanced techniques and best practices.

## Advanced Utility Classes

Learn about lesser-known utility classes that can speed up your development...

## Custom Components with @apply

While utility-first is great, sometimes you need custom components...

## Responsive Design Patterns

Tailwind makes responsive design intuitive...

## Performance Optimization

Keep your bundle size small with these techniques...
    `,
    featured_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: {
      name: "CSS",
      slug: "css"
    },
    tags: [
      { name: "Tailwind CSS", slug: "tailwind-css", color: "#06B6D4" },
      { name: "CSS", slug: "css", color: "#1572B6" },
      { name: "Frontend", slug: "frontend", color: "#FF6B6B" }
    ],
    published_at: "2024-01-10T14:30:00Z",
    reading_time: 6,
    views: 890,
    author: {
      username: "cossettealexis",
      first_name: "Cossette",
      last_name: "Alexis"
    }
  },
  {
    id: 3,
    title: "Getting Started with Next.js 14: App Router and Server Components",
    slug: "getting-started-nextjs-14-app-router-server-components",
    excerpt: "Explore the new features in Next.js 14 including the App Router and Server Components.",
    content: `
# Getting Started with Next.js 14: App Router and Server Components

Next.js 14 introduces powerful new features that change how we build React applications. Let's explore the App Router and Server Components.

## The App Router

The new App Router provides a more intuitive way to handle routing...

## Server Components

Server Components allow us to render React components on the server...

## Data Fetching Patterns

Learn new patterns for fetching data in Next.js 14...

## Migration Guide

If you're coming from the Pages Router, here's how to migrate...
    `,
    featured_image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: {
      name: "JavaScript",
      slug: "javascript"
    },
    tags: [
      { name: "Next.js", slug: "nextjs", color: "#000000" },
      { name: "React", slug: "react", color: "#61DAFB" },
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E" }
    ],
    published_at: "2024-01-05T09:15:00Z",
    reading_time: 10,
    views: 1580,
    author: {
      username: "cossettealexis",
      first_name: "Cossette",
      last_name: "Alexis"
    }
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filteredPosts = [...mockBlogPosts];

    // Apply filters
    if (category) {
      filteredPosts = filteredPosts.filter(post => post.category.slug === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
      );
    }

    // Paginate
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    const response = {
      posts: paginatedPosts,
      pagination: {
        current_page: page,
        total_pages: Math.ceil(filteredPosts.length / perPage),
        total_posts: filteredPosts.length,
        has_next: endIndex < filteredPosts.length,
        has_previous: page > 1,
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

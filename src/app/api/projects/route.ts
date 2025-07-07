import { NextRequest, NextResponse } from 'next/server';

// Mock project data
const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce platform built with React, Django, and PostgreSQL. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    short_description: "Full-stack e-commerce platform with React and Django",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/ecommerce-platform",
    live_url: "https://ecommerce-demo.vercel.app",
    technologies: ["React", "Django", "PostgreSQL", "Stripe", "Tailwind CSS", "Docker"],
    status: "completed",
    featured: true,
    created_at: "2023-12-01T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z"
  },
  {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and analytics dashboard.",
    short_description: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/task-manager",
    live_url: "https://taskmanager-demo.vercel.app",
    technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind CSS"],
    status: "completed",
    featured: true,
    created_at: "2023-11-15T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description: "A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps using multiple weather APIs.",
    short_description: "Responsive weather dashboard with forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/weather-dashboard",
    live_url: "https://weather-dashboard-demo.vercel.app",
    technologies: ["React", "OpenWeatherMap API", "Chart.js", "CSS Modules"],
    status: "completed",
    featured: false,
    created_at: "2023-10-20T00:00:00Z",
    updated_at: "2023-12-01T00:00:00Z"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    slug: "social-media-dashboard",
    description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides insights and reporting.",
    short_description: "Social media analytics and reporting dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/social-dashboard",
    live_url: "https://social-dashboard-demo.vercel.app",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL", "D3.js"],
    status: "active",
    featured: true,
    created_at: "2023-09-10T00:00:00Z",
    updated_at: "2024-01-05T00:00:00Z"
  },
  {
    id: 5,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "This portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include blog functionality, project showcase, and contact forms.",
    short_description: "Personal portfolio with blog and project showcase",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/portfolio",
    live_url: "https://cossettealexis.github.io",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "active",
    featured: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z"
  },
  {
    id: 6,
    title: "Chat Application",
    slug: "chat-application",
    description: "Real-time chat application with rooms, file sharing, emoji support, and message history. Built with modern web technologies.",
    short_description: "Real-time chat with rooms and file sharing",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github_url: "https://github.com/cossettealexis/chat-app",
    live_url: "https://chat-demo.vercel.app",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
    status: "completed",
    featured: false,
    created_at: "2023-08-15T00:00:00Z",
    updated_at: "2023-10-01T00:00:00Z"
  }
];

export async function GET() {
  try {
    const response = {
      projects: mockProjects
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

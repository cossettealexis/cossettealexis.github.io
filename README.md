# Cossette Alexis Portfolio

A modern, full-stack portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include a blog system, project showcase, contact forms, and CMS-like functionality.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light mode support
- **Blog System**: Full-featured blog with categories, tags, and search
- **Project Showcase**: Display your projects with live demos and source code links
- **Contact Forms**: Functional contact form with validation
- **CMS-like Experience**: Easy content management through API endpoints
- **SEO Optimized**: Built-in SEO optimization with metadata
- **Performance**: Optimized for speed and Core Web Vitals
- **Animations**: Smooth animations with Framer Motion
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling

### Backend/API

- **Next.js API Routes** - Serverless API endpoints
- **Mock Data** - Sample content for demonstration
- **Contact Form API** - Email sending functionality

### Deployment

- **Vercel** - Optimized for Vercel deployment
- **GitHub Pages** - Alternative deployment option

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/cossettealexis/cossettealexis.github.io.git
   cd cossettealexis.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── blog/           # Blog pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── BlogPreview.tsx # Blog preview
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Navbar.tsx      # Navigation
│   │   └── Footer.tsx      # Footer
│   └── styles/             # Stylesheets
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Personal Information

1. **Update personal details** in the following files:
   - `src/components/Hero.tsx` - Hero section content
   - `src/components/About.tsx` - About section content
   - `src/components/Footer.tsx` - Footer content
   - `src/app/layout.tsx` - SEO metadata

### Projects

1. **Add your projects** in `src/app/api/projects/route.ts`
2. **Update project images** in the `public/` directory
3. **Modify project data** structure as needed

### Blog Posts

1. **Add blog posts** in `src/app/api/blog/route.ts`
2. **Create individual blog pages** in `src/app/blog/[slug]/`
3. **Update blog metadata** for SEO

### Styling

1. **Colors**: Update the color palette in `tailwind.config.js`
2. **Fonts**: Change fonts in `src/styles/globals.css`
3. **Layout**: Modify component styles in respective files

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Deploy with one click** - Vercel automatically detects Next.js
3. **Custom domain** - Add your custom domain in Vercel settings

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```
2. **Deploy the `out/` directory** to GitHub Pages

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```
2. **Deploy the `.next/` directory** to your hosting provider

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Optional: Add environment variables for external services
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=your-email@example.com
```

### Database Integration (Optional)

To connect a real database:

1. **Choose a database** (PostgreSQL, MongoDB, etc.)
2. **Update API routes** in `src/app/api/`
3. **Add database models** and connection logic
4. **Update environment variables**

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To enable email sending:

1. **Choose an email service** (SendGrid, Mailgun, etc.)
2. **Update the contact API** in `src/app/api/contact/route.ts`
3. **Add email service credentials** to environment variables

## 🎯 Performance Optimization

- **Images**: Use Next.js Image component for optimized images
- **Fonts**: Fonts are automatically optimized by Next.js
- **Bundle Size**: Analyze bundle size with `npm run analyze`
- **Core Web Vitals**: Monitor performance with Vercel Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vercel** for excellent deployment platform

## 📞 Support

If you have any questions or need help with setup, feel free to:

- Open an issue on GitHub
- Contact me at [cossettealexis@gmail.com](mailto:cossettealexis@gmail.com)
- Connect with me on [LinkedIn](https://linkedin.com/in/cossette-alexis-gabuya)

---

Made with ❤️ by [Cossette Alexis Gabuya](https://cossettealexis.github.io)

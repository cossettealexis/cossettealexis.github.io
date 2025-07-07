import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { BlogPreview } from '@/components/BlogPreview';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}

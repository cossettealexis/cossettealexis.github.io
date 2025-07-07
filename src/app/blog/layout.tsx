import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cossette Alexis Gabuya',
  description: 'Read my latest blog posts about web development, technology, and programming tutorials.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

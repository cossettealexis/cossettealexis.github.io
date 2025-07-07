/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/admin/:path*',
        destination: '/api/admin/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

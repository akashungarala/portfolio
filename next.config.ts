import type { NextConfig } from 'next';

// The food-diary app is a separate Vercel project. Overridable so a preview
// deployment can be pointed at somewhere other than production.
const FOOD_DIARY_ORIGIN =
  process.env.FOOD_DIARY_ORIGIN ?? 'https://akash-food-diary.vercel.app';

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Proxy /food-diary to the food-diary project. A rewrite (not a redirect)
  // keeps akashungarala.com in the address bar. That app serves every one of
  // its routes under the same /food-diary prefix, so this maps 1:1 and needs
  // no path rewriting -- its links, form actions and redirects all stay valid.
  async rewrites() {
    return [
      { source: '/food-diary', destination: `${FOOD_DIARY_ORIGIN}/food-diary` },
      {
        source: '/food-diary/:path*',
        destination: `${FOOD_DIARY_ORIGIN}/food-diary/:path*`,
      },
    ];
  },
};

export default nextConfig;

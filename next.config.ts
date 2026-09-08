import type { NextConfig } from 'next';

// The food-diary app is a separate Vercel project. Overridable so a preview
// deployment can be pointed at somewhere other than production.
const FOOD_DIARY_ORIGIN = process.env.FOOD_DIARY_ORIGIN ?? 'https://akash-food-diary.vercel.app';

// The car-maintenance-companion frontend is a separate Vercel project; its API
// runs on a k3s cluster reached through Cloudflare. Both overridable so a
// preview deployment can point somewhere other than production.
const CMC_WEB_ORIGIN = process.env.CMC_WEB_ORIGIN ?? 'https://car-maintenance-companion.vercel.app';
// Single label below the apex, deliberately: Cloudflare's free Universal SSL
// covers only akashungarala.com and *.akashungarala.com, and a wildcard matches
// one label — api.garage.akashungarala.com failed the TLS handshake outright.
const CMC_API_ORIGIN = process.env.CMC_API_ORIGIN ?? 'https://garage-api.akashungarala.com';

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

      // Proxy /apps/car-maintenance-companion, same 1:1 approach as food-diary:
      // that app sets basePath to this prefix, so every route and asset URL it
      // emits already carries it and no path rewriting is needed.
      //
      // The API rule MUST stay above the app rules. Rewrites match in order and
      // `/apps/car-maintenance-companion/:path*` would otherwise swallow
      // `/apps/car-maintenance-companion/api/...` and send API calls to the
      // frontend, which would answer with a 404 HTML page instead of JSON.
      //
      // The API prefix is stripped here; the FastAPI service sets root_path to
      // the same prefix so its /docs page still links to the proxied
      // openapi.json rather than a path that only exists on the origin.
      {
        source: '/apps/car-maintenance-companion/api',
        destination: `${CMC_API_ORIGIN}/`,
      },
      {
        source: '/apps/car-maintenance-companion/api/:path*',
        destination: `${CMC_API_ORIGIN}/:path*`,
      },
      {
        source: '/apps/car-maintenance-companion',
        destination: `${CMC_WEB_ORIGIN}/apps/car-maintenance-companion`,
      },
      {
        source: '/apps/car-maintenance-companion/:path*',
        destination: `${CMC_WEB_ORIGIN}/apps/car-maintenance-companion/:path*`,
      },
    ];
  },
};

export default nextConfig;

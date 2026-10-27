import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      {
        source: '/pro-direct',
        destination: '/blog/pro-direct',
        permanent: true,
      },
      {
        source: '/abonnement-iptv-smarters',
        destination: '/blog/abonnement-iptv-smarters',
        permanent: true,
      },
      {
        source: '/canal-plus-tarif',
        destination: '/blog/canal-plus-tarif',
        permanent: true,
      },
      {
        source: '/iptv-with-4k',
        destination: '/blog/iptv-with-4k',
        permanent: true,
      },
      {
        source: '/media-player-classic-player',
        destination: '/blog/media-player-classic-player',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

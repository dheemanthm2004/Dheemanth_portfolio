import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'skillicons.dev',
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'leetcard.jacoblin.cool',
      'i.ibb.co',
      'lnk.ink'
    ],
    unoptimized: true // For external image services
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Changed from 'standalone' to be more compatible with Netlify
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  // Set trailingSlash to true for better compatibility with static hosting
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  env: {
    // Use the environment variable or fallback to the new domain
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://aircoinstallatiesittard.nl'
  }
}

module.exports = nextConfig

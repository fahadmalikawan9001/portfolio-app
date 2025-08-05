/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add any specific Next.js configurations here.
  // For example, if you have images hosted on external domains,
  // you would add a remotePatterns configuration:
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 's3.amazonaws.com', // Replace with your image host
  //       port: '',
  //       pathname: '/my-bucket/**', // Adjust path as needed
  //     },
  //   ],
  // },
  // output: 'standalone', // Example: if you want to deploy as a standalone app
}

module.exports = nextConfig

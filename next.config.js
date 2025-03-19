/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'disciplined-bison-38.convex.cloud',
        port: '',
        pathname: '/api/storage/**',
      },
    ],
  },
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'randomuser.me'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable turbopack for now to avoid CSS issues
  experimental: {
    turbo: false
  }
};

module.exports = nextConfig;

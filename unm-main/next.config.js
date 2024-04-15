/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["umn.vercel.app", "d.novoresume.com"],
  },
};

module.exports = nextConfig;

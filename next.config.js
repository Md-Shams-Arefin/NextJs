/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    envMode: process.env.NODE_ENV,
  },
}

module.exports = nextConfig

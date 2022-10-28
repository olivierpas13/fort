/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true
  },

  env:{
    BACKEND_URL: 'http://localhost:3003',
    FRONTEND_URL: 'http://localhost:3000'
    // BACKEND_URL: 'https://fort-backend.vercel.app'
  }
};

module.exports = nextConfig;

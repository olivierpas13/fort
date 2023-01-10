/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true
  },

  env:{
    // BACKEND_URL: 'http://localhost:3003',
    // FRONTEND_URL: 'http://localhost:3000'
    // FRONTEND_URL: 'https://fort-ten.vercel.app/',
    // BACKEND_URL: 'https://fort-backend.vercel.app'
  }
};

module.exports = nextConfig;

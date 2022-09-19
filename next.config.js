/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true
  },
  env:{
    PORT: 'veleta'
  }
};

module.exports = nextConfig;

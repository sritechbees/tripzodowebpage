import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
// next.config.js
module.exports = {
  images: {
    domains: ['randomuser.me'],
  },
};


export default nextConfig;

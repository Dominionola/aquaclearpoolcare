import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

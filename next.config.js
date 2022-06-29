/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // "images.unsplash.com",
    domains: ["localhost", "images.unsplash.com"],
    // loader: "imgix",
    //path: "localhost",
  },
};

module.exports = nextConfig;

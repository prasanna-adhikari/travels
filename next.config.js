/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    // loader: "imgix",
    //path: "localhost",
  },
};

module.exports = nextConfig;

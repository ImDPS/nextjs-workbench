/** @type {import('next').NextConfig} */

// add remote pattern Images.upnsplash.com domain
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};




export default nextConfig;

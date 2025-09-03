/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        
        protocol: "https",
        hostname: "construccioneshitech.com",
        port: "", // o el puerto que estés usando, por ejemplo "8888"
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "80", // o el puerto que estés usando, por ejemplo "8888"
        pathname: "/web-general-headless/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

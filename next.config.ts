/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        
        protocol: "https",
        hostname: "pevestore.com.192-169-171-147.cpanel.site",
        port: "", // o el puerto que estés usando, por ejemplo "8888"
        pathname: "/general-solution/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

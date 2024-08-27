/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any path starting with /api
        destination: "http://127.0.0.1:8000/api/:path*", // Proxy to your Django backend
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/",
      },
      {
        source: "/external-redirect",
        destination: "https://google.com",
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
      {
        source: "/external-rewrite",
        destination: "https://google.com",
      },
    ];
  },
};

module.exports = nextConfig;

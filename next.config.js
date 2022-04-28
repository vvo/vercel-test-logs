/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: true,
      },
      {
        source: "/external-redirect",
        destination: "https://google.com",
        permanent: true,
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

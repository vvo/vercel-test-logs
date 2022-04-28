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
    ];
  },
};

module.exports = nextConfig;

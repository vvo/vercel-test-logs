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
      {
        source: "/rewrite",
        destination: "/",
        permanent: true,
      },
      {
        source: "/external-rewrite",
        destination: "https://google.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

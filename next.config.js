/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Proxy PostHog API.
    return [
      {
        source: "/ingest/:path*",
        destination: "https://eu.posthog.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

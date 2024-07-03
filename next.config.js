/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "dkqugojkeudvcvvkqusu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "urduxdmdfrgitwanvbkw.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;

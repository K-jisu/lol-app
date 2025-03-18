/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/15.5.1/img/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

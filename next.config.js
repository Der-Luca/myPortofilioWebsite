/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Aktiviert den statischen Export
    trailingSlash: true, // Sorgt für saubere URLs
    images: {
      unoptimized: true, // Deaktiviert Next.js Image-Optimierung für Firebase
    },
  };
  
  module.exports = nextConfig;
  
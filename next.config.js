/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",  <-- LÖSCHEN oder auskommentieren!
    trailingSlash: true, 
    images: {
      unoptimized: true, 
    },
  };
  
module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: die Demo läuft ohne Server auf jedem Static-Host
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

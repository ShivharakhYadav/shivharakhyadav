/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // renamed case study; keep old links and search results working
      { source: "/projects/e-learning-saas", destination: "/projects/dms-simulation-platform", permanent: true },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // generated share images and icons read these fonts at request time on Vercel
    outputFileTracingIncludes: {
      "/**/*": ["./src/assets/fonts/**"],
    },
  },
  async redirects() {
    return [
      // renamed case study; keep old links and search results working
      { source: "/projects/e-learning-saas", destination: "/projects/dms-simulation-platform", permanent: true },
    ];
  },
};

export default nextConfig;

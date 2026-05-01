/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // Enable caching for optimized images
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  headers: async () => {
    return [
      {
        source: '/(\\.webp|jpg|jpeg|png|gif|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

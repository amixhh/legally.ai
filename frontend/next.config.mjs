/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "undici": false,
      };
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['undici']
  }
};

export default nextConfig;

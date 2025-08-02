/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Reduce the number of chunks created during build
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Improve webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Add fallbacks for Node.js modules in client-side code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        fs: false,
        path: false,
        os: false,
      }
    }

    // Optimize for better development performance
    if (dev) {
      // Don't override Next.js default devtool to avoid warnings
      config.cache = true // Enable cache for better performance
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }

    return config
  },

  // Enable strict mode for better React development experience
  reactStrictMode: true,

  // Reduce bundle size by removing unused code
  swcMinify: true,

  // Optimize images
  images: {
    domains: ['cdn.builder.io'],
    formats: ['image/webp', 'image/avif'],
  },

  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

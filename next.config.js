const withLess = require('next-with-less');

const path = require('path');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, options) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['#'] = path.resolve(path.join(__dirname, 'public'));

    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader', 'remark-loader'],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', "api.microlink.io",], 
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true
    }
  },
  ...nextConfig
}))
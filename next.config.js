const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // lessLoaderOptions: {
  //   javascriptEnabled: true,
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
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
  experimental:{
    appDir: true
  },
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // });

    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: ['style-loader', 'css-loader', 'less-loader'],
    // });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}



module.exports = nextConfig

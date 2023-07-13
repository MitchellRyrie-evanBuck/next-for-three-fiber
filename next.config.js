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
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // });

    // // // 配置Less加载器
    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: ['style-loader', 'css-loader', 'less-loader'],
    // });

    return config;
  },
}



module.exports = nextConfig

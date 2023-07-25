const path = require('path');

const nextConfig = {
  reactStrictMode: false,
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
    appDir: false,
    // fastRefresh: false,
  },
  swcMinify: true,
  webpack: (config, options) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // });

    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: ['style-loader', 'css-loader', 'less-loader'],
    // });
    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader', 'remark-loader'],
    });

    config.module.rules.push(
      // {
      //   test: /\.(gif|svg)$/i,
      //   use: [
      //     {
      //      options: {
      //         limit: config.inlineImageLimit,
      //         publicPath: `${config.assetPrefix || '/_next/static/'}`,
      //         outputPath: `${options.isServer ? "../" : ""}static/`,
      //       }
      //     }
      //   ]
      // },
    )


    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
   images: {
     domains: ['images.unsplash.com', 'static/images', 'source.unsplash.com'], // Add the hostname of the external domain here
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer( nextConfig)

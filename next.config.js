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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          // {
          //   loader: 'url-loader', options: {
          //     limit: config.inlineImageLimit,
          //     fallback: 'file-loader',
          //     publicPath: `${config.assetPrefix || '/_next/static/images/'}`,
          //     outputPath: `${options.isServer ? "../" : ""}static/images/`,
          //     name: "[name]-[hash].[ext]",
          //     esModule: false
          //   }
          // }
        ]
      },
    )


    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
   images: {
    domains: ['images.unsplash.com'], // Add the hostname of the external domain here
  },
}



module.exports = nextConfig

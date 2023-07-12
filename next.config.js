const path = require('path');

const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withSass = require("@zeit/next-sass");

// const CSS = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   ...withLess(
//     withSass({
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//       },
//     })
//   ),
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
  // },
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

}



module.exports = nextConfig

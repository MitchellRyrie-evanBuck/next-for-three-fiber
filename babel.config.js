
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // 这里只需要设置 'react-syntax-highlighter' 别名即可
          'react-syntax-highlighter': 'react-syntax-highlighter',
          // 其他别名...
        },
      },
    ],
  ],
};
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');

module.exports = {
  watch: true,
  mode: "development",
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
  ]
};
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      { test: /\.scss$/i,
       use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
    ]
  }
};
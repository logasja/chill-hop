const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "*.json",
          to: ".",
          context: "src/"
        },
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: true,
        }
      },
      {
        test: /\.(webp|jpeg|jpg|png)$/i,
        type: 'asset/resource',
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve('/mnt/c/Users/logas/AppData/Local/Lively\ Wallpaper/Library/wallpapers', 'chillhop'),
    clean: true,
  },
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base');

module.exports = () => ({
  ...base,
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    publicPath: '/',
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
});

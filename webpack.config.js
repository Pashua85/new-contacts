const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
        exclude: '/node_modules/'
      }
    ],
  },
  output: {
      filename: '[name].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: `source-map`
}
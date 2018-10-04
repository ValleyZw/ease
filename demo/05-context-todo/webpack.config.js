const path = require('path')
// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebPackPlugin = require('html-webpack-plugin')
// Copies individual files or entire directories to the build directory
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // react entry file
  entry: path.join(__dirname, 'src/index.js'),

  // compiled files
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,  // compile js or jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  // webpack-dev-server configuration
  devServer: {
    historyApiFallback: true,
    port: 3000
  },

  plugins: [
    // Point to html template
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),

    // Copy static file to dist folder without changing structure
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'}
    ]),
  ],
}
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: {
    product: 'src/product/index.js',
  },
  output: {
    path:'static/bundles/',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
    }]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'src/product/components',
    ],
    alias: {
      Navibar: 'src/web-components/Navibar.js',
    },
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
}

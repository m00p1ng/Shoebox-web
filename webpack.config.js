var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: {
    product: 'product/templates/components/ProductApp.jsx',
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
      'product/templates/components',
    ],
    alias: {
      Navibar: 'static/components/Navibar.jsx',
    },
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
}

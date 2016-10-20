var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: path.resolve('./static/react'),
  entry: {
    product: './product/ProductApp.jsx',
  },
  output: {
    path: path.resolve('./static/bundles/'),
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
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: [
        'node_modules',
        './react',
        './react/product',
      ],
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
}

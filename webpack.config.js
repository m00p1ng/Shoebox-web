var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: {
    bundle: 'src/route.js',
  },
  output: {
    path:'static/js/',
    filename: 'bundle.js',
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
      'node_modules'
    ],
    alias: {
<<<<<<< HEAD
      config: 'src/config.js'
=======
      config: 'src/config'
>>>>>>> 15af0d458029c84411ae3b0c4fad61c3eba78004
    },
  },
}

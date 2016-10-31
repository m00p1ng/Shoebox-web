var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'src/index.js',
  ],
  output: {
    path:'static/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      endpoint: 'src/constants/endpoint',
      actionTypes: 'src/constants/actionTypes'
    },
  },
}

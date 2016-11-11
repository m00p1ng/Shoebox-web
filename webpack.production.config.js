var path = require('path')
var webpack = require('webpack')
var myconfig = require('./webpack.config.js')

myconfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
     warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
]

module.exports = myconfig

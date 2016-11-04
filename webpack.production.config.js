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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
     compress: {
         warnings: false
     }
   })
  ]
}

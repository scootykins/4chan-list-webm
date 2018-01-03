const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    './dist': './lib/index.js',
    './docs': './demo/index.js'
  },
  output: {
    path: path.join(__dirname, './'),
    filename: '[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader'
      }
    ]
  }
}

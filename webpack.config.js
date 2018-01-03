const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
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

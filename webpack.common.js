const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))

module.exports = {
  entry: {
    'swagger-client': [
      './src/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },

  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel-loader',
      query: babelrc,
      exclude: [
        /node_modules/
      ]
    }]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

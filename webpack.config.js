var webpack = require('webpack');

var PROD = (process.env.NODE_ENV === 'production')

module.exports = [{
    context: __dirname + "/src",
    entry: "./index",
    output: {
      path: __dirname + "/build",
      filename: 'windrift.js',
      libraryTarget: 'umd',
      library: 'Windrift',
    },
    module: {
      loaders: [{
          test: /.js/,
          loaders: ['babel?cacheDirectory']
        }, {
          test: /\.json$/,
          loader: 'json'
        }
      ]
    },
    plugins: PROD ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        comments: false
      }),
      new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
      })]
      : [new webpack.DefinePlugin({
          "process.env": {
          NODE_ENV: JSON.stringify("develop")
          }
      })]
  }
];

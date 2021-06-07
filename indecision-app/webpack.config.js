/*
  webpack is a static module bundler for modern JavaScript applications. 
  When webpack processes your application, 
  it internally builds a dependency graph which 
  maps every module your project needs and generates one or more bundles.

  This is the config file for webpack, it needs to know the entry point of the app
  and the path to the output file.

  webpack runs babel too

  babel-cli allows you to run babel using cli
  babel-core allows you to run babel using tools like webpack
  babel-loader is a webpack plug in which will teach webpack how to run babel
*/

// entry -> output

// get the absolute path for the current directory
//console.log(__dirname);

// add path module to concat paths
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, 
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
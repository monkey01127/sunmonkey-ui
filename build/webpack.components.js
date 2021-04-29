/*
 * @Author: lijuan.sun
 * @Date: 2021-04-27 18:43:45
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 14:30:59
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \sunmonkey-ui\build\webpack.components.js
 */

var path = require('path');
var webpack = require('webpack');
const Components = require('../components.json');

module.exports = {
  // entry: './src/index.js',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryTarget: 'commonjs2',
    // auxiliaryComment: 'Test Comment',
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader", options: {
            paths: [
              path.resolve(__dirname, "node_modules")
            ]
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  }
};

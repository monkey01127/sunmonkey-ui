/*
 * @Author: lijuan.sun
 * @Date: 2021-04-28 14:48:48
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 14:57:21
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \sunmonkey-ui\build\webpack.conf.js
 */
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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

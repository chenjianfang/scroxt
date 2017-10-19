const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

module.exports = function (env) {
  return webpackMerge(commonConfig(),{
    plugins:[
        //js文件压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            output:{
                comments:false
            }
        })
    ]
  });
}
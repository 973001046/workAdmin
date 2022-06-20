const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(webpackBase, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4
      }),
      new TerserPlugin()
    ]
  }
})
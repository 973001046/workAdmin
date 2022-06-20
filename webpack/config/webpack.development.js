const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
module.exports = merge(webpackBase, {
  mode: 'development',
})
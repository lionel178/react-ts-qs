const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { SERVER_HOST, SERVER_PORT } = require('../constant')

const proxySetting = require('../../src/setProxy.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
    proxy: {
      ...proxySetting,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

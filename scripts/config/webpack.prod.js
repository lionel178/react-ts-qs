const glob = require('glob')
const webpack = require('webpack')
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PROJECT_PATH } = require('../constant')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by react-ts-qs (https://github.com/lionel178/react-ts-qs) */',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
  ],
})

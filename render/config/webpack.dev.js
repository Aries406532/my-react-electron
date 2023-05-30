const webpack = require('webpack')
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const {htmlWebpackPlugin} = require('./htmlWebpackPlugin')
const mode = 'development'

module.exports = merge(common, {
    mode,
    devtool: 'inline-source-map',
    devServer: { //配置开发服务器
        hot: true,
        open: true,
        historyApiFallback: {
            index: "./index.html",
        },
    },
    plugins: [
        htmlWebpackPlugin(mode),
        new webpack.HotModuleReplacementPlugin()
    ],
})
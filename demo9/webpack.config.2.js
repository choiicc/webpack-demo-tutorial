const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js', // hash & filename 同时存在,则 chunkFilename 不可以使用hash。 hash chunkhash contenthash不能再同一个文件名里（filename）
        chunkFilename: '[name].[chunkhash].[contenthash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'caching'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
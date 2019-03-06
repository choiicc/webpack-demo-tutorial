const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        // filename: '[name].[chunkhash].[contenthash].[hash].js',
        chunkFilename: '[name].[chunkhash].[contenthash].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'momo'
        })
    ],
    optimization: {
        // https://webpack.docschina.org/plugins/split-chunks-plugin/
        splitChunks: {
            chunks: 'all',
            // name: false,
            maxSize: 30000 // bytes

            // chunks: 'async',
            // minSize: 30000,
            // maxSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // }
        }
    },
    devServer: {
        port: 80,
        open: true
    }
}
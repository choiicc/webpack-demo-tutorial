const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: {
        polyfillys: './src/polyfill.js',
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            // _: 'lodash'
            join: ['lodash', 'join']
        }),
        new HtmlWebpackPlugin({
            template: './index.ejs',
            title: 'shim',
            chunks: ['index']
        })
    ],
    module: {
        rules: [
            // 使用后对index.js中的import xx from xxx有影响
            // 使用import() require来替代
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?this=>window' // 覆盖this指向window
            },
            {
                test: require.resolve('./src/global.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            },
        ]
    }
}
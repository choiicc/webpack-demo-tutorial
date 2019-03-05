const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports ={
    entry:{
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'output.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'world'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {         // options选项
                        presets: ['@babel/preset-env'],  // presets设置的就是当前js的版本
                        // plugins: [require('@babel/plugin-transform-object-rest-spread')] // plugin是需要的插件
                    }
                }
            }
        ]
    },
    devServer: {
        port: 80,
        open: true,
    },
    mode: 'production' // development
}
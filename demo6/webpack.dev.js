const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map', // 重新构建速度很快
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.join(__dirname,'./dist')
        // contentBase: '../demo5/src'
        contentBase: ['../demo5/src', '../demo4'],
        // contentBase: ['../demo5/src', '../demo4', './dist'], // 那些目录可以直接访问
        publicPath: '/dist/', // 打包后的文件在哪里
        // headers: {
        //     'abc': 'gogogo'
        // },
        // index: 'index.html',
        // inline: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
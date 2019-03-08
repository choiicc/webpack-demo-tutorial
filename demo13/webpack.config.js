const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'typescript'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    // 版本不符 ？？
                    // transpileOnly: true,
                    // experimentalWatchApi: true
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devtool: 'inline-source-map'
}
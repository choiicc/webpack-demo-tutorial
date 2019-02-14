const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        test: './src/test.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'eval', // bug 追踪（适合开发使用）****
    plugins: [
        new CleanWebpackPlugin(['dist']), // 输出前清理dist目录
        // 输出 output 所有文件 到新的 index.html
        new HtmlWebpackPlugin({ // htmlWebpackPlugin.options(注入变量命名空间<参照 html-webpack-plugin/index.ejs )
            inject: 'body',
            filename: 'index.html', // 相对output中的path
            template: './index.tpl', // html 模板文件
            title: '开发开发',
        }),
    ],
    performance:{
        hints: false
    }
}
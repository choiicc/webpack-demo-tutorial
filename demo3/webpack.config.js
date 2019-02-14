const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    entry: {
        test: './src/test.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // 输出前清理dist目录
        // 输出 output 所有文件 到新的 index.html
        new HtmlWebpackPlugin({ // htmlWebpackPlugin.options(注入变量命名空间<参照html-webpack-plugin/index.ejs)
            inject: 'body',
            filename: 'index1.html', // 相对output中的path
            template: './index.tpl', // html 模板文件
            title: '大大大',
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // },
            // hash: true, // 给所有注入文件加入hash xxx?abcdefd1234asdfsdfkkf
            cache: true, // emit the file only if it was changed
        }),
        // new WebpackManifestPlugin() // 生成一个manifest.json , 仅供开发调试追踪使用
    ]
}
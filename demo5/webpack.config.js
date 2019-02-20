const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        // test: './src/test.js',
        // print: './src/print.js'
        app: './src/index.js'
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
    mode: 'development',
    // devtool: '', // bug 追踪（适合开发使用）
    devtool: 'eval', // bug 追踪（适合开发使用）****
    // devtool: 'cheap-eval-source-map', // bug 追踪（适合开发使用）****
    // devtool: 'cheap-module-eval-source-map', // bug 追踪（适合开发使用）****
    // devtool: 'eval-source-map', // bug 追踪（适合开发使用） ****
    // devtool: 'cheap-source-map', // bug 追踪（适合开发使用）
    // devtool: 'cheap-module-source-map', // bug 追踪（适合开发使用）
    // devtool: 'inline-cheap-source-map', // bug 追踪（适合开发使用）
    // devtool: 'inline-cheap-module-source-map', // bug 追踪（适合开发使用）
    // devtool: 'source-map', // bug 追踪（适合开发使用）
    // devtool: 'inline-source-map', // bug 追踪（适合开发使用）
    // devtool: 'hidden-source-map', // bug 追踪（适合开发使用）
    // devtool: 'nosources-source-map', // bug 追踪（适合开发使用）
    // 经测试与查看api,在开发阶段最适宜使用： devtool: 'eval' 来bug追踪和调试
    plugins: [
        new CleanWebpackPlugin(['dist']), // 输出前清理dist目录
        // 输出 output 所有文件 到新的 index.html
        new HtmlWebpackPlugin({ // htmlWebpackPlugin.options(注入变量命名空间<参照 html-webpack-plugin/index.ejs )
            inject: 'body',
            filename: 'index.html', // 相对output中的path
            template: './index.tpl', // html 模板文件
            title: '开发开发',
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // },
            // hash: true, // 给所有注入文件加入hash xxx?abcdefd1234asdfsdfkkf
            // cache: true, // emit the file only if it was changed
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新模块
        // new WebpackManifestPlugin() // 生成一个 manifest.json , 仅供开发调试追踪使用
    ],
    devServer: {
        contentBase: './dist', // tell devServer where the files are
        port: 80,
        compress: true,
        hot: true
    },
    performance:{
        hints: false
    }
}
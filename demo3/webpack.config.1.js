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
        new CleanWebpackPlugin(['dist']),
        // 输出 output 所有文件 到新的 index.html
        new HtmlWebpackPlugin({ // htmlWebpackPlugin.options(注入变量命名空间<参照html-webpack-plugin/index.ejs)
            inject: true,
            template: './index.ejs', // html 模板文件
            // title: 'Output Management', // 新html标题
            // baseHref: 'https://www.baidu.com/',
            // window: {
            //     env: {
            //         apiHost: 'http://myapi.com/api/v1'
            //     }
            // }

            // Required
            // inject: false,
            // template: require('html-webpack-template'),
            // template: 'node_modules/html-webpack-template/index.ejs',

            // Optional
            appMountId: 'app',
            appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
            headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
            bodyHtmlSnippet: '<custom-element></custom-element>',
            baseHref: 'http://example.com/awesome',
            devServer: 'http://localhost:3001',
            googleAnalytics: {
                trackingId: 'UA-XXXX-XX',
                pageViewOnLoad: true
            },
            meta: [
                {
                    name: 'description',
                    content: 'A better default template for html-webpack-plugin.'
                }
            ],
            mobile: true,
            lang: 'en-US',
            links: [
                'https://fonts.googleapis.com/css?family=Roboto',
                {
                href: '/apple-touch-icon.png',
                rel: 'apple-touch-icon',
                sizes: '180x180'
                },
                {
                href: '/favicon-32x32.png',
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png'
                }
            ],
            inlineManifestWebpackName: 'webpackManifest',
            scripts: [
                'http://example.com/somescript.js',
                {
                src: '/myModule.js',
                type: 'module'
                }
            ],
            title: 'My App',
            window: {
                env: {
                    apiHost: 'http://myapi.com/api/v1'
                }
            }

            // And any other config options from html-webpack-plugin:
            // https://github.com/ampedandwired/html-webpack-plugin#configuration
        })
    ]
}
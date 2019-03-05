const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another_module.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    // https://webpack.docschina.org/plugins/split-chunks-plugin/
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
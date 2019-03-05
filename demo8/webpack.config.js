const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
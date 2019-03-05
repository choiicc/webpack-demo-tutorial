const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js', // https://webpack.docschina.org/configuration/output/#output-chunkfilename
    },
}
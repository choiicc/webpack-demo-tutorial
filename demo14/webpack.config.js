const path = require('path');


// env === process.env ??
module.exports = env => {
    console.log('NODE_ENV', env.NODE_ENV);
    console.log('production', env.production);

    return {
        entry: {
            xxx: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        }
    }
} 

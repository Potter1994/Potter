const path = require('path');
console.log(path.resolve());

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].all.js',
        library: 'commentPlugin'
    }
}
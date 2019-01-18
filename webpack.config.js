var path = require('path');

module.exports = {
    mode: "development",
    entry: './scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'html'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'html'),
        compress: true,
        port: 3000
    }
};

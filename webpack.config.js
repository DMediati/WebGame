const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const outputPath = path.resolve(__dirname, 'html');
const options = {
    host: "localhost",
    port: 3000,
    static: outputPath,
    hmr: false,
    liveReload: true
};
 
module.exports = {
    mode: 'development',
    entry: [
        './scripts/main.js',
        'webpack-plugin-serve/client' // ← important: this is required, where the magic happens in the browser
    ],
    output: {
        path: outputPath,
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    plugins: [
        new Serve(options)
    ],
    watch: true  // ← important: webpack and the server will continue to run in watch mode
};

var webpack = require("webpack");

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'application': './src/main.ts'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js',
        chunkFilename: './dist/[id].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['application', 'vendor', 'polyfills']
        })
    ]
};
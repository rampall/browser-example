var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
            result.request = result.request.replace(/typeorm/, "typeorm/browser");
        })
    ]
};
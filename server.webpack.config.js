const path = require('path');
const nodeExternals = require('webpack-node-externals');
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    entry: {
        'server': './src/server/index.js',
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ],
    },
    externals: [nodeExternals()]
};
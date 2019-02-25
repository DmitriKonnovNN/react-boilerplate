const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'bundle': './src/client/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ "babel-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: 'src/client/index.html'
        })
      ],
      devServer: {
        contentBase: path.join(__dirname, 'dist/public'),
        watchContentBase: true, 
        overlay: { 
          warnings: false, 
          errors: true, 
        },
      },
};
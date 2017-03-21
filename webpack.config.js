const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', 'sass-loader'],
                publicPath: '/dist/'
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg|gif|jpe?g|png)(\?]?.*)?$/,
            use: 'file-loader?name=res/[name].[ext]?[hash]'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
         title: 'React seed',
         minify: {
            collapseWhitespace: true
         },
         hash: true,
         template: './src/index.html'
      }),
      new ExtractTextPlugin({
          filename: 'bundle.css',
          disable: false,
          allChunks: true
      })
    ]
}

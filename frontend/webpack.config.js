'use strict';

const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        // progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: APP_DIR + '/main.jsx',
    /*
     * entry: {
     *     'webpack-dev-server/client?http://localhost:8080',
     *     'webpack/hot/dev-server',
     *     path.resolve(__dirname, 'app/main.jsx'),
     *     // './app/main.jsx'
     * },
     */
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};

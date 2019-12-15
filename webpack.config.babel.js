import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
    target: 'node',
    entry: path.join(__dirname, 'server.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].index.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoader = {
    test: /\.(vue)$/,
    exclude: /node_modules/,
    loader: 'vue-loader'
}

const scssLoader = {
    test: /\.(css|scss)$/,
    loader: ['css-loader', 'sass-loader']
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'installer.js'
    },
    module: {
        loaders: [vueLoader, scssLoader]
    },
    externals: {
        electron: 'window.require("electron")',
        path: 'window.require("path")',
        fs: 'window.require("fs")'
    },
    resolve: {
        alias: {
            vue$: path.resolve('..', 'node_modules', 'vue', 'dist', 'vue.esm.js')
        }
    },
    node: {
        process: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
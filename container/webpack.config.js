const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const config = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8000/',
    },
    devServer: {
        port: 8000,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                mfe1: 'mfe1@http://localhost:8001/remoteEntry.js'
            }
        })
    ]
}

module.exports = config
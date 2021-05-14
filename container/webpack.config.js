const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                mfe1: 'mfe1@http://localhost:8081/remoteEntry.js',
                mfe2: 'mfe2@http://localhost:8082/remoteEntry.js'
            },
        })
    ]
}

module.exports = config
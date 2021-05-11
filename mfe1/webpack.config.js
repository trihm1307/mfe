const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const config = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8001/',
    },
    devServer: {
        port: 8001,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "mfe1",
            filename: "remoteEntry.js",
            exposes: {
                './mfe1': './src/boostrap',
            }
        })
    ]
}

module.exports = config
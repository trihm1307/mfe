const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
        filename: '[name].[contenthash].js'
      },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "mfe2",
            filename: "remoteEntry.js",
            exposes: {
                './boostrap': './src/boostrap',
            },
            shared: {}
        })
    ]
}

module.exports = config
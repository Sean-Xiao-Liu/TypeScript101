const  path = require('path');
const  htmlWebpackPlugin = require('html-webpack-plugin');
const {cleanWebpackPlugin} = require('clean-webpack-plugin');
// const  webpackDevServer = require('webpack-dev-server');

module.exports = {
    //
    mode:'development',
    entry:"./src/index.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude: /node-module/
            }
        ]
    },

    plugins: [
        // new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            // title: "Define title of webpage"
            template: "./src/index.html"
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@support': path.resolve(__dirname, 'cypress/support')

        }
    }

}

'use strict';

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        port: 8090,
        historyApiFallback: true, //单页用到
        inline: true //实时刷新
    },
    module: {
        rules: [{
            test: /(\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/
        }]
    }
}
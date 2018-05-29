'use strict';

module.exports = {
    mode: 'production',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist' )
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
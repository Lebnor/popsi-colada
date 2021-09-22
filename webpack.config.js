const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },

    devServer: {
        hot: true,
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                enforce: "pre",
                // use: ['source-map-loader'],
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),

                options: {
                    cacheDirectory: true,
                    plugins: ["react-hot-loader/babel"],
                },
            },
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: "css-loader",
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("development"),
            },
        }),
    ],
};

options: {
    presets: [
        "@babel/preset-env",
        "@babel/react",
        { plugins: ["@babel/plugin-proposal-class-properties"] },
    ];
}

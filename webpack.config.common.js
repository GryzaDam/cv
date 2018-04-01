const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const deployDir = process.env.DEPLOY_DIR || path.resolve(__dirname, )

module.exports = {
    entry: [
        path.resolve(__dirname, "ts", "index.tsx")
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        })
    ],
    output: {
        path: path.resolve(deployDir),
        filename: "dist/[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: path.resolve(__dirname, "node_modules"),
            },
        ]
    }
};

// po co to template w HtmlWebpackPlugin
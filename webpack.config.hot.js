const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

const CommonConfig = require("./webpack.config.common.js");

module.exports = merge(CommonConfig, {
    entry: [
        "webpack-dev-server/client?http://localhost:8000",
        "webpack/hot/only-dev-server"
    ],

    devtool: "source-map",

    resolve: {
        alias: {
            config: path.resolve(__dirname, "ts", "Configuration", "Config.development.ts")
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": `"development"`
            }
        }),
    ],

    devServer: {
        hot: true,
        publicPath: "/",
        port: 8000,

        host: "localhost",
        historyApiFallback: true
    }
})
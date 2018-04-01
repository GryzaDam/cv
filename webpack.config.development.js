const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

const CommonConfig = require("./webpack.config.common.js");

module.exports = merge(CommonConfig, {
    devtool: "source-map",

    resolve: {
        alias: {
            config: path.resolve(__dirname, "ts", "Configuration", "Config.development.ts")
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": `"development"`
            }
        })
    ]
});

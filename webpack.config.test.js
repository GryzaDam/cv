const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

const CommonConfig = require("./webpack.config.common.js");

module.exports = merge(CommonCOnfig, {
    devtool: "source-map",

    resolve: {
        alias: {
            config: path.resolve(__dirname, "ts", "Configuration", "Config.test.ts")
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": `"test"`
            }
        })
    ]
});

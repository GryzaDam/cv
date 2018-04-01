const webpack = require("webpack");

module.exports = function (environment) {
    const env = environment || process.env.NODE_ENV || "development"; // czemu taki zestaw alternatyw

    return (env === "development" && require("./webpack.config.development.js") ||
        env === "test" && require("./webpack.config.test.js") ||
        env === "production" && require("./webpack.config.production.js"));
}
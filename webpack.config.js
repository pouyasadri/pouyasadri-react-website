// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;
var CompressionPlugin = require('compression-webpack-plugin');
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),


    new MiniCssExtractPlugin(),
    ],
module: {
    rules: [
        {
            test: /\.(js|jsx)$/i,
            loader: "babel-loader",
        },
        {
            test: /\.css$/i,
            use: [stylesHandler, "css-loader"],
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
        },

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
    ],
}
,
}
;

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};

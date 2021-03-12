const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const devEnv = process.env.DEV || "false";
const devMode = devEnv.trim() === "true";

/** @type {webpack.Configuration} */
const config = {
  entry: "./assets/web/javascripts/index.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  watch: devMode,
  mode: devMode ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../", "index.html"),
    }),
  ],
};

module.exports = config;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const devMode = process.env.DEV.trim() == "true";

const config = {
  entry: "./assets/web/javascripts/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
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

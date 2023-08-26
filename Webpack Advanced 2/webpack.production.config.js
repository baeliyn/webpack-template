const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack")

module.exports = merge(common, {
  //MODE
  mode: "production",

  //OUTPUT
  output: {
    clean: true,
  },

  //PLUGINS
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
  ],

  //MODULES
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

});

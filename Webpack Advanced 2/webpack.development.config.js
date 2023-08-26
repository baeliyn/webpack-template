const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  //MODE
  mode: "development",

  //PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  
});

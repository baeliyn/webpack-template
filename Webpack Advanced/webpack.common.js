const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    
  //ENTRY
  entry: path.resolve(__dirname, "src/index.js"),

  //OUTPUT
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  //PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],

  //MODULES
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

};

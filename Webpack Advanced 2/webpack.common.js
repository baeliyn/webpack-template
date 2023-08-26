const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    new MiniCssExtractPlugin({
      filename: "[name].[hash:4].css",
    }),
  ],

  //MODULES
  module: {
    
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },

};

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./app.js"],
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
    }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        // {
        //     from: path.resolve(__dirname, "router/routes"),
        //     to: path.resolve(__dirname, "dist/routes"),
        //     globOptions: {
        //       ignore: ["*.js"],//不复制.js以外的文件
        //     },
        //   },
        { from: ".env", to: "." },
      ],
    }),
  ],
};

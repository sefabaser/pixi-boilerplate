const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const path = require("path");
const root = path.resolve("./");
const { dependencies } = require(`${root}/package.json`);

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    renderer: `${root}/src/app.ts`,
    vendor: Object.keys(dependencies),
  },
  output: {
    path: `${root}/build`,
    filename: "[name].js",
  },

  devServer: {
    port: 3000,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: "Electron",
      filename: "index.html",
      template: `${root}/index.html`,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new WebpackShellPlugin({
      onBuildEnd: ["electron ."],
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" },
    ],
  },
  target: "electron-renderer",
};

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const root = path.resolve("./");
const { dependencies } = require(`${root}/package.json`);

const rendererPath = `${root}/src/app.ts`;
const target = `${root}/target`;
const template = `${root}/index.html`;
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    renderer: rendererPath,
    vendor: Object.keys(dependencies),
  },
  output: {
    path: target,
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
      template,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
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
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

const { mainPath, target, isDev } = require("./env");

module.exports = {
  entry: {
    main: `${mainPath}/index.ts`,
  },
  output: {
    path: target,
    filename: "[name].js",
    publicPath: "/",
    devtoolModuleFilenameTemplate: "file:///[absolute-resource-path]",
  },
  node: {
    __dirname: false,
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && "inline-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" },
    ],
  },
  target: "electron",
};

const Webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EntryPlus = require('webpack-entry-plus');
const path = require('path');

const root = path.resolve('./');
const { dependencies } = require(`${root}/package.json`);
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: EntryPlus([
    {
      entryFiles: [`${root}/src/app.ts`],
      outputName: 'renderer'
    },
    {
      entryFiles: Object.keys(dependencies),
      outputName: 'vendor'
    }
  ]),
  output: {
    path: `${root}/dist`,
    filename: '[name].js'
  },
  devServer: {
    port: 3001
  },
  devtool: isDev && 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'Legends',
      filename: 'index.html',
      template: `${root}/index.html`
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new WebpackShellPlugin({
      onBuildEnd: [isDev ? 'electron --inspect=5859 --remote-debugging-port=9222 .' : 'echo "Packaging in progress!"']
    })
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ascii_only: true
          }
        }
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.js$/, enforce: 'pre', use: 'source-map-loader' },
      { test: /\.(glsl|vs|fs)$/, loader: 'ts-shader-loader' },
      { test: /\.md$/, loader: 'ts-shader-loader' }
    ]
  },
  target: 'electron-renderer'
};

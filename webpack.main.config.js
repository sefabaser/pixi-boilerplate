const path = require('path');
const root = path.resolve('./');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: `${root}/src/main.ts`
  },
  output: {
    path: `${root}/dist`,
    filename: '[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
  },
  node: {
    __dirname: false
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'inline-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: 'pre', use: 'source-map-loader' }
    ]
  },
  target: 'electron-main'
};

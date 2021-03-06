const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { app: './client/index.js' },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), './public'),
    publicPath: '',
  },

  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /fs/,
      path.resolve(process.cwd(), 'client/emptyModule.js')
    ),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(process.cwd(), 'node_modules'),
      },
    ],
  },
};

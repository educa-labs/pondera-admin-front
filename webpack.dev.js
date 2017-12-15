const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge.strategy({
  entry: 'prepend',
})(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    overlay: true,
  },
  entry: [
    'react-hot-loader/patch',
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
});

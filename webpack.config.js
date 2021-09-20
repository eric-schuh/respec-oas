const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = [{
  mode: 'development',
  entry: './index.js',
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ['console', 'assert']
    })
  ]
}];

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = [{
  mode: 'production',
  entry: './index.js',
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ['console', 'assert'],
      additionalAliases: ['process']
    })
  ]
}];

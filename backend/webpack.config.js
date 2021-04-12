// Dependencies
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/main.ts',
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  target: 'node',
  externals: [ nodeExternals() ],
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart:{
        scripts: ['echo "===> Starting packing with WEBPACK 5"'],
        blocking: true,
        parallel: false
      },
      onBuildEnd:{
        scripts: ['npm run backendstart'],
        blocking: false,
        parallel: true
      }
    })
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['ts-loader'],
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}

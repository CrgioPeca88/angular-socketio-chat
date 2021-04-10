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
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
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
      use: ['ts-loader']
    }]
  }
}

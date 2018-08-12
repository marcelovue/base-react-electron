const HardSource = require('hard-source-webpack-plugin')

const client = {
  entry: ['babel-polyfill',__dirname+'/src/client/index.js'],
  mode: 'development',
  target: 'node',
  output: {
    path: __dirname+'/public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env','stage-3','react']
        }
      }
    ]
  },
  resolve: {
    alias: {
      Root: __dirname+'/',
      Src: __dirname+'/src/',
      Shared: __dirname+'/src/shared/',
      Containers: __dirname+'/src/shared/containers/',
      Components: __dirname+'/src/shared/components/',
    }
  },
  plugins: [
    new HardSource()
  ]
}
module.exports = client

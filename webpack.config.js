const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js','.jsx']
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    disableHostCheck: true,
    contentBase: './public',
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: []
}

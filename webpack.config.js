const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  cache: true,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { 
        test: /\.html$/, 
        loader: 'raw-loader' 
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader?outputPath=fonts/'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "variables";',
              includePaths: [path.resolve(__dirname, './src/core/style/')]
            }
          }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Safra UI',
      template: './src/index.ejs',
      favicon: './src/core/style/assets/img/favicon.ico',
      config: process.env.CONFIG_FILE || 'config',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
  ]
}
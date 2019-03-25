const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  cache: true,
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/app/core'),
      modules: path.resolve(__dirname, './src/app/modules')
    },
    extensions: ['.js']
  },
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
              includePaths: [path.resolve(__dirname, './src/app/core/style/')]
            }
          }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Safra UI',
      template: './src/index.ejs',
      favicon: './src/app/core/style/assets/img/favicon.ico',
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

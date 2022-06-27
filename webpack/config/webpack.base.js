const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const workSpaceDir = process.cwd()

module.exports = {
  entry: path.resolve(workSpaceDir, './main.tsx'),
  output: {
    path: path.resolve(workSpaceDir, './dist'),
    filename: "static/js/[chunkhash].bundle.js",
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'less'],
    alias: {
      '@src': path.resolve(workSpaceDir, './src')
    }
  },
  module: {
    rules: [{
      oneOf: [
        {
          test: /\.css$/,
          use: [
            // 'style-loader',
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            // 'style-loader',
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'less-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          },
          generator: {
            filename: 'static/images/[hash:10][ext][query]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/source',
          generator: {
            filename: 'static/media/[hash:10][ext][query]'
          }
        },
        {
          test: /\.(js|ts|tsx|jsx)$/,
          exclude: '/node_modules/',
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }]
        }
      ]
    }]
  },
  plugins: [
    new WebpackBar(),
    new ESLintPlugin({
      context: path.resolve(workSpaceDir, '../')
    }),
    new HtmlWebpackPlugin({
      title: 'workAdmin',
      template: path.resolve(workSpaceDir, './index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      experimentalUseImportModule: true,
    })
  ]
}
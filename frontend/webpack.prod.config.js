var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var ChunksWebpackPlugin = require('chunks-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractText = require('extract-text-webpack-plugin');


module.exports = {

  mode: "production",
  entry: {
    frontoffice: './src/frontoffice/index.js',
    backoffice: './src/backoffice/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'static/dist'),

    // path: path.join(__dirname, "assets/dist"),
    chunkFilename: '[name].bundle.js',
    // publicPath: 'dist/',
    publicPath: '/static/dist/',
    filename: "[name].bundle.js"
  },
     optimization: {     splitChunks: {
      chunks: 'async',

   },
   },
  plugins: [
    // new BundleTracker({
    //   path: __dirname,
    //   filename: "webpack-stats.json"
    // }),
    new ChunksWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Humanitarian Tour Operator',
    // }),
    // new ExtractText({
    //     filename: '[name]-[hash].css'
    //   }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,

        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: false,
              // localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      },
      // {
      //   test: /\.(gif|svg|jpg|png)$/,
      //   loader: "file-loader",
      // },

      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: ExtractText.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },
    ]
  },
  // resolve: {
  //   modulesDirectories: ['node_modules', 'bower_components'],
  //   extensions: ['', '.js', '.jsx']
  // },
  resolve: {
  modules: [path.resolve(__dirname, './src/backoffice'), 'node_modules', path.resolve(__dirname, './src/frontoffice')],
  extensions: ['.js', '.jsx', '.json'],
  alias: {
    "app-js": path.resolve(__dirname, './src')
  }
},
};

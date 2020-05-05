var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  mode: "development",

  entry: {
    frontoffice: './src/frontoffice/index.js',
    backoffice: './src/backoffice/index.js'
  },
  output: {
    path: path.join(__dirname, "static/dist"),
    filename: "[name]-[hash].js"
  },

  devtool: "source-map",

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
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
              sourceMap: process.env.NODE_ENV !== "production",
              // localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production"
            }
          }
        ]
      },
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
    ]
  }
  ,
  resolve: {
    modules: [path.resolve(__dirname, './src/backoffice'), 'node_modules', path.resolve(__dirname, './src/frontoffice')],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      "app-js": path.resolve(__dirname, './src')
    }
  },
};

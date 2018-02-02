let path = require("path");
let webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./src/entry.jsx"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist/"),
    hot: true,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/js/"),
    publicPath: "/js/",
    filename: "app.js"
  },
  resolve: {
    alias: {},
    extensions: [ "", ".js", ".jsx", ".json" ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

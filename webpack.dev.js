const path = require("path");
const webpack = require("webpack");
// Plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY_LIB = path.join(__dirname, "src");
const ENTRY_EXAMPLES = path.join(__dirname, "./example/index.js");
const SRC_PATH = path.join(__dirname, "src");
const OUT_PATH = path.join(__dirname, "dist");

module.exports = {
  entry: {
    examples: ENTRY_EXAMPLES
  },
  devtool: "source-map",
  output: {
    path: OUT_PATH,
    filename: "[name].bundle.[hash].js",
    library: "cornerstone-extension-template",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./node_modules"), SRC_PATH],
    alias: {
      "@template-tool": ENTRY_LIB
    }
  },
  plugins: [
    // Show build progress
    new webpack.ProgressPlugin(),
    // Clear dist between builds
    new CleanWebpackPlugin(),
    // Generate `index.html` with injected build assets
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "example", "index.html")
    })
  ],
  // Fix for `cornerstone-wado-image-loader` fs dep
  node: { fs: "empty" },
  devServer: {
    hot: true,
    open: true,
    host: "localhost",
    disableHostCheck: true,
    port: 3000,
    historyApiFallback: true
  }
};

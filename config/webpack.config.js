const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var WebpackBar = require("webpackbar");
//创建webpack.config.js
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "../src/main.js"),
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./bundle.js",
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                tag: "img",
                attribute: "data-src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-srcset",
                type: "srcset",
              },
              {
                // Tag name
                tag: "link",
                // Attribute name
                attribute: "href",
                // Type of processing, can be `src` or `scrset`
                type: "src",
                // Allow to filter some attributes
              },
            ],
          },
        },
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    // @ts-ignore
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
      title: "第一个",
    }),
  ],
  //  TODO 网络服务
  devServer: {
    port: 8080,
    host: "localhost",
    // host: "192.168.3.135",
    static: "./public",
  },
  mode: "development",
};

console.log("http://localhost:8080");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src", "app"),
      "@constants": path.resolve(__dirname, "src", "constants"),
      "@entities": path.resolve(__dirname, "src", "entities"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@shared": path.resolve(__dirname, "src", "shared"),
      "@widgets": path.resolve(__dirname, "src", "widgets"),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["asset/resource"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};

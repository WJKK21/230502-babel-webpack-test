const path = require("path");

module.exports = {
  entry: {
    index: "./src/app.tsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ["ts-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

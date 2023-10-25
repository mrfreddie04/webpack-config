const path = require("path");

let mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    //contentBase: "./dist",
    static: {
      directory: path.join(__dirname, "./dist"),
    },
  },
};

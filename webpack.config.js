const path = require('path');
// var PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new PrettierPlugin()
  // ],
};
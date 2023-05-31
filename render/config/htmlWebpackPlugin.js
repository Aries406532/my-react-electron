//生成一个 HTML5 文件，引入各种资源文件
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

function htmlWebpackPlugin(mode){
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, "../main/index.html"),
    filename: 'index.html',
  })
}
module.exports ={
  htmlWebpackPlugin
}
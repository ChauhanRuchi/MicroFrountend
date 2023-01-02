const HtmlWebpackPlugin=require("html-webpack-plugin")
const ModuleFdrationPlugin=require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8084,
  },
  plugins:
   [ new ModuleFdrationPlugin({
    name:"app1",
    filename:"remoteEntry.js",
    exposes:{
        "./app1Show":"./src/index"
    }
   }),new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
  
}
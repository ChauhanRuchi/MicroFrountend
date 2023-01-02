const HtmlWebpackPlugin=require("html-webpack-plugin")
const ModuleFdrationPlugin=require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins:
   [ new ModuleFdrationPlugin({
    name:"cart",
    filename:"remoteEntry.js",
    exposes:{
        "./cartShow":"./src/bootstrap"
    },
   
   }),new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
  
}
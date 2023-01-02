const HtmlWebpackPlugin=require("html-webpack-plugin")
const ModuleFdrationPlugin=require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8083,
  },
  plugins:
   [ new ModuleFdrationPlugin({
    name:"app",
    filename:"remoteEntry.js",
    exposes:{
        "./appShow":"./src/index"
    }
   }),
   new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
  
}
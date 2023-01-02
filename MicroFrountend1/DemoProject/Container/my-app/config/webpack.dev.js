const {merge} =require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFdrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig=require("./webpack.common")

const devConfig={
    mode:"development",
    devServer:{
        port:8090,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[ 
  //       new ModuleFdrationPlugin({
  //    name: "container",
  //     remotes: {
  //       marketing: "marketing@http://localhost:8081/remoteEntry.js",       
  //     },

  //  })
  
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),]
}
module.exports=merge(commonConfig,devConfig);
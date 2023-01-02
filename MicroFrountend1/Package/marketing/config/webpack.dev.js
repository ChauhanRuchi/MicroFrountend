const {merge} =require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFdrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig=require("./webpack.common")

const devConfig={
    mode:"development",
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[ 
     new ModuleFdrationPlugin({
    name:"marketing",
    filename:"remoteEntry.js",
    exposes:{
        './MarketingApp':"./src/bootstarp"
    },

   })
        ,new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),]
}
module.exports=merge(commonConfig,devConfig);
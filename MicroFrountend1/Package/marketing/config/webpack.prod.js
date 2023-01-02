const {merge} =require("webpack-merge");
const ModuleFdrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig=require("./webpack.common")

const proConfig={
    mode:"production",
    output:{
        filename:"[name].[contenthash].js"
    },
    plugins:[ 
     new ModuleFdrationPlugin({
    name:"marketing",
    exposes:{
        './MarketingApp':"./src/bootstarp"
    },

   })
    ]
}
module.exports=merge(commonConfig,proConfig);
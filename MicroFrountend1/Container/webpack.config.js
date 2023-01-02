const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFdrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFdrationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
         cart: "cart@http://localhost:8082/remoteEntry.js",
        // app: "app@http://localhost:8083/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

import DotenvWebpackPlugin from "dotenv-webpack"
import { readFileSync } from "fs"
import HtmlWebPackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"

import { printCompilationMessage } from "./compilation.config.js"

const { dependencies } = JSON.parse(
  readFileSync(path.resolve(import.meta.dirname, "./package.json"), {
    encoding: "utf-8"
  })
)

const { ModuleFederationPlugin } = webpack.container

export default () => ({
  output: {
    publicPath: "http://localhost:8081/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
    watchFiles: [path.resolve(import.meta.dirname, "src")],
    onListening: function (devServer) {
      const port = devServer.server.address().port

      printCompilationMessage("compiling", port)

      devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
        setImmediate(() => {
          if (stats.hasErrors()) {
            printCompilationMessage("failure", port)
          } else {
            printCompilationMessage("success", port)
          }
        })
      })
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "jobs",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./inject": "./src/inject.tsx"
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new DotenvWebpackPlugin()
  ]
})

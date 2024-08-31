import CopyWebpackPlugin from "copy-webpack-plugin"
import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { CallableOption, WebpackConfiguration } from "webpack-cli"

type Env = Parameters<CallableOption>[0]
type Argv = Parameters<CallableOption>[1] & {
  mode?: "development" | "production"
}

export default (_: Env, { mode = "development" }: Argv) => {
  return {
    mode,
    entry: "./src/index.ts",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /(\.tsx?|\.jsx?)$/,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: "3"
                  }
                ],
                "@babel/preset-typescript"
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({ template: "./public/index.html" }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, "public"),
            filter: (filepath) => !filepath.endsWith(".html")
          }
        ]
      })
    ],
    devtool: mode === "development" ? "inline-source-map" : false,
    devServer: {
      port: 3000,
      compress: true
    }
  } satisfies WebpackConfiguration
}

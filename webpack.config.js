const path = require("path");
const PugPlugin = require("pug-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "views", "index", "index.pug"),
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: './',
    },
    resolve: {
      alias: {
        Images: path.join(__dirname, './src/images/'),
      }
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            js: {
                filename: "assets/js/[name].[contenthash:8].js"
            },
            css: {
                filename: "assets/css/[name].[contenthash:8].css"
            }
        })
    ],
    module: {
        rules: [
          {
            test: /\.pug$/,
            loader: PugPlugin.loader
            //☝🏽 Load Pug files
          },
          {
            test: /\.(css|sass|scss)$/,
            use: ['css-loader', 'sass-loader']
            //☝🏽 Load Sass files
          },
          {
            test: /\.(png|jpg|jpeg|ico)/,
            type: 'asset/resource',
            generator: {
              // output filename of images
              filename: 'assets/img/[name].[hash:8][ext]',
            },
          },
          {
            // To use fonts on pug files:
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'assets/fonts/[name][ext][query]'
            }
          }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist')
        },
        watchFiles: {
          paths: ['src/**/*.*', 'assets/scss/**/*.*'],
          //☝🏽 Enables HMR in these folders
          options: {
            usePolling: true
          }
        }
      },
      stats: 'errors-only'

}
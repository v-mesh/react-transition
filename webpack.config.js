const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, options) => {
  return {
    context: path.resolve(__dirname, 'src'),
    mode: options.mode,
    entry: {
      app: './ts/index.tsx'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new CleanWebpackPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    }
  }
}

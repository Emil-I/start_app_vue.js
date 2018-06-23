const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    admin: ['./admin/app/app.js'],
    index: ['./index/app/app.js']
  },
  output: {
    path: path.resolve(__dirname, '.dist'),
    publicPath: NODE_ENV === 'development' ? __dirname + '/' : undefined,
    filename: path.join('[name].bundle.js'),
    library: '[name]'
  },

  watch: NODE_ENV === 'development',

  performance: {
    hints: NODE_ENV === 'production' ? "warning" : false
  },

  devtool: NODE_ENV === 'production' ? '#source-map' : '#eval-source-map',

  devServer: {
    open: true
  },

  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          extractCSS: true,
          preserveWhitespace: false,
          postcss: [autoprefixer({
            browsers: ['last 7 versions']
          })]
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },

      {
        test: /\.(png|jpg|jpeg|mp4|ovg|webm|svg|ttf|eot|woff|woff2)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            name: '[path][name].[ext]',
            limit: '100000'
          }
        }]
      },
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index/dev.html'),
      filename: path.resolve(__dirname, 'index.html'),
      inject: 'body',
      alwaysWriteToDisk: true,
      hash: NODE_ENV === 'production',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'admin/dev.html'),
      filename: path.resolve(__dirname, 'admin/index.html'),
      inject: 'body',
      alwaysWriteToDisk: true,
      hash: NODE_ENV === 'production',
      chunks: ['admin']
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};

if (NODE_ENV === 'production') {
  console.log('NODE_ENV = production');
} else {
  console.log('NODE_ENV = development');
}

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const  {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
entry: './src/js/index.js',
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
},


module: {
    rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                }, {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
                },
              ]
            },{
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {

            test: /\.pug$/,
            use: [
                "html-loader",
                "pug-html-loader"
            ]
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
              }]
            },{
                test: /\.(gif|png|jpe?g)$/i,
                use: [{
                loader: 'file-loader',
                options: {
                name: 'img/[name].[ext]'
                }
              }],
            },{
                test: /\.svg$/,
                loader: 'file-loader'
            },	
			
			{
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                loader: 'file-loader',
                options: {
                name: 'fonts/[name]/[name].[ext]'
                }
              },
            }

    ]
},
plugins: [
new HtmlWebpackPlugin({
  template: './src/index.pug',
  filename: 'index.html'

}),
new HtmlWebpackPlugin({
  template: './src/page2.pug',
  filename: 'page2.html'

}),
// new HtmlWebpackPlugin({
//   template: './src/pug/layout/index2.pug',
//   filename: './index2.html'
//
// }),
// new webpack.HotModuleReplacementPlugin(),

new MiniCssExtractPlugin({
  filename: 'style.css',
}),

new ExtractTextPlugin("style.css"),
new CleanWebpackPlugin(),

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
}),
new CopyWebpackPlugin([
  {
    from: './src/libs',
    to: 'libs'
  },

  {
    from: './src/img',
    to: 'img'
  },
  {
    from: './src/svg',
    to: 'svg'
  },

  {
    from: './src/fonts',
    to: 'fonts'
  }
]),
]
}

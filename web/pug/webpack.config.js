const path = require('path');
const HtmlWebpackPlugin = require(‘html-webpack-plugin’);
const config = {
  entry: {
    app: './src/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
  }
};
module.exports = (env, argv) => {
if (argv.mode === 'development') {}
 if (argv.mode === 'production') {}
return config;
},
plugins: [
  new HtmlWebpackPlugin({
    template: ‘./src/index.pug’
  }),
],
module: {
  rules: [
    {
      test: /\.pug$/,
      use: [“pug-loader”]
    },
  ]
};

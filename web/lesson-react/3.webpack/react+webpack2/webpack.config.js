const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/main.js',
    output: {
        path: (__dirname + '/public/build') ,
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' && 'eval-source-map',
    module: {
		  rules:[
		    {
		      test: /\.jsx?$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: [
				  '@babel/preset-env',
				  '@babel/preset-react'
				   ]
		        }
		      }
		    }
		    
	     ]
	    
		
	 },		
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        })
    ]
};

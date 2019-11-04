// const NODE_ENV = process.env.NODE_ENV || 'development';// режим сборки

// const NODE_ENV = options => {
// 	return options.mode === "development" || !options.mode;
// };

 // module.exports = (env, argv) => {



const NODE_ENV = process.env.NODE_ENV || 'development';
	 
module.exports = {
	mode: 'development',
    entry: './src/main.js',
    output: {
		 path: (__dirname + '/public/build') ,
         filename: 'bundle.js'
     },
	 devtool: 'source-map',
	 watch: true,


	 // devtool: NODE_ENV ==='development' && 'source-map',
	 // watch: NODE_ENV ==='development',


  	// if (argv.mode === 'development') {
    // config.devtool = 'source-map';
    // }

    
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
	   
	// return config;
	
};


var path = require('path')
var webpack = require('webpack')

module.exports = {   
	entry: __dirname+'/src/javascripts/index.js',
	output:{
		path:__dirname+'/public',
		publicPath:'/assets/',
		filename:"bundle.js"
	},
	module:{
		loaders: [
		  {
			test: /\.jsx?$/,
			loaders  : ['babel?presets[]=es2015&presets[]=es2017&presets[]=react&plugins[]=transform-class-properties'],
			include: path.join(__dirname,'src'),
			exclude:path.join(__dirname,'node_modules')
		  },
		  {
			test: /\.s?css$/,
			loader: 'style!css!sass'
		  },
		  {
			test:/\.(png|jpg|bmp)$/,
			loader: 'url?limit=5000&name=images/[name].[ext]'
		  },
		  {
		  	test:/\.json/,
		  	loader:'json'
		  }
		]
	}
}
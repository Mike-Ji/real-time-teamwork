
var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
		path: __dirname + "/public/build",
		filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/public",
        port: 3000
    },
	devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
			query:
			      {
			        presets:['react']
			      }
        }]
    },
	mode: 'development'
}

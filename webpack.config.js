const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		'strplace': './src/strplace.ts',
		'strplace.spec': './src/strplace.spec.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	}
}
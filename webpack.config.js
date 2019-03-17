const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src',
	output: {
		filename: '[name].[hash:6].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		overlay: true,
		progress: true,
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['dist'], { root: __dirname }),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};

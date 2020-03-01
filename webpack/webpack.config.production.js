const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SimpleProgressPlugin = require('webpack-simple-progress-plugin')

module.exports = () => ({

	entry: { main: './src/index.js' },

	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'index.js'
	},

	mode: 'production',

	plugins: [
		new CleanWebpackPlugin(),
		new SimpleProgressPlugin(),
	],

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	}
})
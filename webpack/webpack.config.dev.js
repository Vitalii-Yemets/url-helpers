// Webpack uses this to work with directories
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const SimpleProgressPlugin = require('webpack-simple-progress-plugin')
const { HotModuleReplacementPlugin } = require("webpack")
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin")

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = (env, { mode, host, port }) => {
	return {

		// Path to your entry point. From this file Webpack will begin his work
		entry: {
			main: ['./app.js']
		},

		// Path and filename of your result bundle.
		// Webpack will bundle all JavaScript into this file
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[hash].js'
		},

		// Default mode for Webpack is production.
		// Depending on mode Webpack will apply different things
		// on final bundle. For now we don't need production's JavaScript
		// minifying and other thing so let's set mode to development
		mode,

		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			hot: true,
			stats: {
				version: false,
				performance: false,
				env: true,
				entrypoints: false,
				colors: true,
				hash: false,
				version: true,
				timings: true,
				assets: true,
				chunks: false,
				modules: true,
				maxModules: 0,
				modulesSort: 'size',
				reasons: false,
				children: false,
				source: true,
				errors: true,
				errorDetails: true,
				errorStack: true,
				warnings: true,
				publicPath: true,
				progress: false
			},

		},

		plugins: [
			new CleanTerminalPlugin({
				message: `Dev server running on http://${host}:${port}`,
				onlyInWatchMode: false
			}),
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: '[name].[hash].css',
				chunkFilename: '[id].[hash].css',
			}),
			new HtmlWebpackPlugin({
				inject: false,
				hash: true,
				template: './index.html',
				filename: 'index.html'
			}),
			new SimpleProgressPlugin(),
			new HotModuleReplacementPlugin(),
			new OpenBrowserWebpackPlugin({ url: `http://${host}:${port}` })
		],

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: process.env.NODE_ENV === 'development',
								reloadAll: true,
							},
						},
						'css-loader'
					],
				},
			]
		}
	}
}
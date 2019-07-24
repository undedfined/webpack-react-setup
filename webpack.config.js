const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const webpackConfig = {
    entry: [ path.resolve(__dirname, 'src', 'app.js') ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
				test: /\.html$/,
				use: [ { loader: 'html-loader' } ]
            },
            {
				test:/\.css$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test:/\.scss$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
        ]
    },
    devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		watchContentBase: true
    },
    optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		watchContentBase: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join('src', 'index.html'),
			filename: './index.html'
		}),
		new MiniCssExtractPlugin(),
	]
}

module.exports = webpackConfig
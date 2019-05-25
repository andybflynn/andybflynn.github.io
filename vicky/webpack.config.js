const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	devtool: 'cheap-eval-source-map',
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[chunkhash].js',
	},
	devServer: {
		port: 9500,
		contentBase: path.join(__dirname, './'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			}, {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					}, {
						loader: 'css-loader',
					}, {
						loader: 'sass-loader',
					},
				],
			}, {
				test: /\.(png|svg|jpg|gif|eot|ttf|woff)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
          options: {
            publicPath: 'dist/',
          },
				},
			},
		],
	},
	resolve: {
		alias: {
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/scss'),
      img: path.resolve(__dirname, 'src/img'),
      // actions: path.resolve(__dirname, 'src/app/actions'),
		},
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Happy birthday, Vicky!',
      filename: '../index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = false;
}

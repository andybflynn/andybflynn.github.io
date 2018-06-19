const path = require('path');
const webpack = require('webpack');

const config = {
	devtool: 'cheap-eval-source-map',
	entry: {
		index: path.resolve(__dirname, 'src/index.js'),
    fourOhFour: path.resolve(__dirname, 'src/fourOhFour.js'),
    utils: path.resolve(__dirname, 'src/app/utils/utils.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
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
      components: path.resolve(__dirname, 'src/app/components'),
      styles: path.resolve(__dirname, 'src/app/scss'),
      img: path.resolve(__dirname, 'src/app/img'),
      // actions: path.resolve(__dirname, 'src/app/actions'),
		},
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = false;
}

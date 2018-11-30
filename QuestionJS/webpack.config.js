const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/QuestionJS.js',
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_ENV: JSON.stringify('browser')
		}
	})
  ],
  output: {
    path: path.resolve(__dirname, 'pub'),
    filename: 'bundle.js',
	library: 'QuestionJS'
  }
};
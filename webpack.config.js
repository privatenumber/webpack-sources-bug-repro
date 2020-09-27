const path = require('path');
const {
  ESBuildPlugin,
  ESBuildMinifyPlugin
} = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		path: path.resolve('dist'),
		libraryTarget: 'umd', // removing this fixes it
	},

	devtool: 'source-map',

	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin(),
		],
	},

	plugins: [
		new ESBuildPlugin(),
	],
};

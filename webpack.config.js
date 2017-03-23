const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('vendor.css');
const bundleOutputDir = path.join(__dirname, './src/Golad/wwwroot/dist');

module.exports = (env) => {
  const isDevBuild = !(env && env.config === 'Release');

  const sourceMapsOrUglify = isDevBuild ?
    new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }) :
    new webpack.optimize.UglifyJsPlugin()

  return {
    stats: { modules: false },
    entry: {
      main: path.join(__dirname, './src/Golad/ClientApp/index.jsx')
    },
    resolve: { extensions: [ '.js', '.jsx' ] },
    output: {
      path: bundleOutputDir,
      filename: '[name].js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, include: /ClientApp/, use: 'babel-loader' },
        { test: /\.css$/, include: /ClientApp/, use: ['style-loader', 'css-loader'] },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, include: /ClientApp/, use: 'url-loader?limit=25000' },
        { test: /\.css(\?|$)/, include: /node_modules/, use: extractStyles.extract(['css-loader']) },
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, include: /node_modules/, use: 'url-loader?limit=100000' }
      ]
    },
    plugins: [
      extractStyles,
      sourceMapsOrUglify,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => (module.context || '').includes('node_modules')
      }),
      //CommonChunksPlugin will now extract all the common modules from vendor and main bundles.
      new webpack.optimize.CommonsChunkPlugin({
        // But since there are no more common modules between them
        // we end up with just the runtime code included in the manifest file.
        // This prevents hashes and other runtime stuff from being included into vendor chunk and changing it.
        name: 'manifest'
      })
    ]
  };
};

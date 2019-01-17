const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({
	    filename: "./css/[name].[hash].css",
	    chunkFilename: "[id].[chunkhash].css"
	  })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "index": path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          },
        },
		    {
	        test: /\.css$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader"
	        ]
        },
		    {
	        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
	        use: {
	          loader: 'url-loader',
	          options: {
	            limit: 1000000,
	            fallback: 'file-loader',
	            name: 'images/[name].[hash].[ext]',
	          }
	        },
	      }                
      ]
    },
    optimization: {
      minimizer: [
        //new UglifyJsPlugin(),
        new OptimizeCSSAssetsPlugin({})
      ]
    },    
    plugins
  }
}
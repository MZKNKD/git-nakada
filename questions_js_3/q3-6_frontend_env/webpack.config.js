const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
                {   test: /\.(sass|scss)$/, 
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]},
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                            }      
                        }   
                }
        ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css',
  })],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
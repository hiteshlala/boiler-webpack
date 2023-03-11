const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const outputFolderName = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production', // or 'development'
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: outputFolderName,
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/*.html', to: '[name].html' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env', {}]
                ],
              },
            },
          }
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};

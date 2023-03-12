const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const outputFolderName = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production', // or 'development'
  entry: {
    index: './src/index.ts',
    page2: './src/page2.tsx'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: outputFolderName,
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/*.html', to: '[name].html' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
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
      },
    ]
  },
};


const ExtractTextPlugin =  require('extract-text-webpack-plugin');

const config = {
  devtool : 'source-map',
  entry : './src/main.js',
  output: {
    path : __dirname,
    filename: 'app.bundle.js',
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.scss$/,
        use : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),        
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./assets/style.css'),
  ],
  resolve: {
    extensions : ['.js', '.jsx', '.scss']
  },
};

module.exports = config;
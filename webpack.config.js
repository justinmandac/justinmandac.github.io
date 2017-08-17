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
        loader: 'style-loader!raw-loader!sass-loader'
      },
    ],
  },
  resolve: {
    extensions : ['.js', '.jsx', '.scss']
  },
};

module.exports = config;
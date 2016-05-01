var devConfig = {
  sourceMap: true,
  outputStyle: 'expanded'
};
var prodConfig = {
  sourceMap: false,
  outputStyle: 'compressed'
};

module.exports = function (env) {
  var config = {};

  switch (env) {
    case 'DEV' :
      config = devConfig;
      break;
    case 'PROD' :
      config = prodConfig;
      break;
    default:
      config = devConfig;
  }

  return config;
};

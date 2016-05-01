var commandLineArgs = require('command-line-args');
var cli = commandLineArgs([
  {name: 'env', alias : 'e', type: String}
]);
var cliOptions = cli.parse();
var ENV = cliOptions.env ? cliOptions.env : 'DEV';

console.log(ENV);

var MetalSmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    layouts    = require('metalsmith-layouts'),
    sass       = require('metalsmith-sass'),
    ejs        = require('ejs');

var sassConfig  = require('./config/sass')(ENV);

var build     = MetalSmith(__dirname)
                .destination('dist/')
                .use(markdown({
                  smartyPants: true
                }))
                .use(layouts({
                  engine: 'ejs',
                  rename: true,
                }))
                .use(sass(ENV))
                .build(function (err) {
                  if (err) {
                    console.log('Build Failed!');
                    console.log(err);
                  } else {
                    console.log('Build Successful!');
                  }
                });

/**
 * Load command line arguments
 */
var commandLineArgs = require('command-line-args');
/**
 * Register new command line arguments here.
 * Passing on unregistered args will cause command-line-args
 * to throw an error.
 */
var cli = commandLineArgs([{
    name: 'env',
    alias: 'e',
    type: String
}]);
var cliOptions = cli.parse();
/**
 *  Settings variables
 */
var TEMPLATE_ENGINE = 'ejs';
var ENV = cliOptions.env ? cliOptions.env : 'DEV';


var MetalSmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    //inplace allows us to use .ejs tags in our Markdown files
    inplace = require('metalsmith-in-place'),
    sass = require('metalsmith-sass'),
    branch = require('metalsmith-branch'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    excerpts  = require('metalsmith-excerpts'),
    ejs = require('ejs');

var sassConfig = require('./config/sass')(ENV);

var build = MetalSmith(__dirname)
    .destination('dist/')
    .use(collections({
      posts: {
        pattern: 'posts/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(inplace({
        engine: TEMPLATE_ENGINE,
        pattern: '**/*.md'
    }))
    .use(markdown({
        smartyPants: true
    }))
    .use(excerpts())
    .use(permalinks())
    .use(layouts({
        engine: TEMPLATE_ENGINE,
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

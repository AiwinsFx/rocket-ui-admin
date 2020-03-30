var colors = require('colors');
var fs = require('fs');
var save = require('file-save');
var resolve = require('path').resolve;
var basename = require('path').basename;
var localePath = resolve(__dirname, '../../src/locale/lang');
var fileList = fs.readdirSync(localePath);
var transform = function(filename, name, cb) {
  // console.log('filename'.rainbow,filename);
  // console.log('name'.rainbow,name);
  // console.log('cb'.rainbow,cb)
  require('babel-core').transformFile(resolve(localePath, filename), {
    plugins: [
      'add-module-exports',
      ['transform-es2015-modules-umd', {loose: true}]
    ],
    moduleId: name
  }, cb);
};

fileList
  .filter(function(file) {
    // console.log('file'.rainbow,/\.js$/.test(file));
    return /\.js$/.test(file);
  })
  .forEach(function(file) {
    var name = basename(file, '.js');
    // console.log('name'.rainbow,name);
    transform(file, name, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        // console.log('result'.rainbow,result.code);
        var code = result.code;

        code = code
          .replace('define(\'', 'define(\'element/locale/')
          .replace('global.', 'global.ELEMENT.lang = global.ELEMENT.lang || {}; \n    global.ELEMENT.lang.');
        save(resolve(__dirname, '../../lib/umd/locale', file)).write(code);

        // console.log(file);
      }
    });
  });

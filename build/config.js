var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`rocket-ui-admin/packages/${key}`] = `rocket-ui-admin/lib/${key}`;
});

externals['rocket-ui-admin/src/locale'] = 'rocket-ui-admin/lib/locale';
utilsList.forEach(function(file) {
  // console.log('遍历的utilsList',file);
  file = path.basename(file, '.js');
  externals[`rocket-ui-admin/src/utils/${file}`] = `rocket-ui-admin/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`rocket-ui-admin/src/mixins/${file}`] = `rocket-ui-admin/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`rocket-ui-admin/src/transitions/${file}`] = `rocket-ui-admin/lib/transitions/${file}`;
});
// console.log('webpack  externals',externals)
externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];
// console.log('webpack  externals',externals)
exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'rocket-ui-admin': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

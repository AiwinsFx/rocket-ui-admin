const path = require('path');
const fs = require('fs');
const save = require('file-save');
var resolve = path.resolve;
var basename = path.basename;
var localePath = resolve(__dirname, '../src/locale/lang');
var fileList = fs.readdirSync(localePath);
// var 
// console.log('path.resolve',path.resolve())
// console.log('process.cwd',process.cwd(),__dirname);
// console.log('webpack的配置',path.resolve(process.cwd(), './lib'));
// console.log('fs.readdirSync',fs.readdirSync(path.resolve(__dirname, '../src/utils')));
// var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
// var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
// var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
// var externals = {};
// console.log('项目运行环境process.env.NODE_ENV',JSON.stringify(process.env.FAAS_ENV))
// save(resolve(__dirname,'../lib/ceshi/save')).write('ceshi','utf8');
console.log('basename',basename);
console.log('srcPath',fileList);
console.log('scss 的处理文件');
var colors = require('colors');
var fs = require('fs');
var path = require('path');
const fileSave = require('file-save');
// console.log('当前文件的路径'.rainbow,);
var modulePath = path.resolve(__dirname,'../../packages/theme-chalk/src/common/module.scss');
var moduleScss = fs.readFileSync(modulePath,'utf8',function(err,data){
  console.log('读取的内容',data);
})
var variablesPath = path.resolve(__dirname,'../../packages/theme-chalk/src/common/variables.scss');
var variablesScss = fs.readFileSync(variablesPath,'utf8',function(err,data){
  console.log('读取的内容',data);
})
fileSave(modulePath).write(moduleScss.replace(/\/\/.*$/mg, ''),'utf8').end('\n');
fileSave(variablesPath).write(variablesScss.replace(/\/\/.*$/mg, ''),'utf8').end('\n');
console.log('输出当前读取的文件'.rainbow,`${moduleScss}`);
console.log( '输出当前读取的文件moduleScss'.rainbow,moduleScss.replace(/\/\/.*$/mg, '') );
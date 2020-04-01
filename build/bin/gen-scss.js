console.log('scss 的处理文件');
var colors = require('colors');
var fs = require('fs');
var path = require('path');
const fileSave = require('file-save');
// console.log('当前文件的路径'.rainbow,);
var moduleScss = fs.readFileSync(path.resolve(__dirname,'../../packages/theme-chalk/src/common/module.scss'),'utf8',function(err,data){
  console.log('读取的内容',data);
})
// fileSave()
console.log('输出当前读取的文件'.rainbow,`${moduleScss}`);
console.log( '输出当前读取的文件moduleScss'.rainbow,moduleScss.replace(/\/\/.*$/mg, '') );
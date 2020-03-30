'use strict';
var colors = require('colors');
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
var classList = [];
// console.log('=======fontFile======'.rainbow,fontFile);
// console.log("========nodes=========".rainbow,postcss.parse(fontFile));
nodes.forEach((node) => {
  // console.log('======node====='.rainbow,'node')
  var selector = node.selector || '';
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // 希望按 css 文件顺序倒序排列

// console.log('========classList======='.rainbow,classList);
fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});

var colors = require('colors');
var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');

var themes = [
  'theme-chalk'
];
Components = Object.keys(Components);
// console.log('Components'.rainbow,Components);
var basepath = path.resolve(__dirname, '../../packages/');
// console.log('baspath'.rainbow,basepath);
function fileExists(filePath) {
  // console.log('-----filePath-----'.rainbow,filePath);
  try {
    if(filePath === '/Users/lihongbo/Documents/工作/UI库/lhb-ceshi-ui/packages/theme-chalk/src/header.scss'){
      console.log('fs.statSync(filePath)',fs.statSync(filePath).isFile())
    }
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach((theme) => {
  // console.log('theme'.rainbow,theme);
  var isSCSS = theme !== 'theme-default';
  // console.log('isScss'.rainbow,isSCSS);
  var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
  // console.log('indexContent'.rainbow,indexContent);
  Components.forEach(function(key) {
    // console.log('key'.rainbow,key);
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + (isSCSS ? '.scss' : '.css');
    indexContent += '@import "./' + fileName + '";\n';
    // console.log('indexContent'.rainbow,indexContent);
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    // console.log('filePath'.rainbow,filePath);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'), indexContent);
});

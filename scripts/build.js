// monorepo 编译项目
// node 来解析packages 目录
const fs = require('fs');

const dirs = fs.readdirSync('packages').filter(path => {
  if (!fs.statSync(`packages/${path}`).isDirectory()) return false; 
  return true;
});
console.log(dirs);
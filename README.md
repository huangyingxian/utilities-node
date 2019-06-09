# nodejs 开发用到的日常方法封装

## 展示方法列表
- difference 
  深度对比出2个对象之间的差异-Deep diff between two object
  ```js
    const {ObjUtilities} = require('utilities-node')
    var a = {name:89757,date:{year:2017,month:4}}
    var b = {name:89757,date:{year:2017,month:3}}
    let c = ObjUtilities.difference(a, b);
    console.log(JSON.stringify(c));  //{"date":{"month":4}}
  ```
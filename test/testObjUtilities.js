const ObjUtilities  = require('../lib/objutilities')

var a = {name:89757,date:{year:2017,month:4}}
var b = {name:89757,date:{year:2017,month:3}}
let c = ObjUtilities.difference(a, b);
console.log(JSON.stringify(c));

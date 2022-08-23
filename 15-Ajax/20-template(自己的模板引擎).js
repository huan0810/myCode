// 封装自己的简易的模板引擎
function template(id, data) {
  var str = document.getElementById(id).innerHTML
  // \s*匹配空白字符 0次或很多次
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/

  var patternResult = null
  while ((patternResult = pattern.exec(str))) {
    str = str.replace(patternResult[0], data[patternResult[1]])
  }
  return str
}

/* #86 字体高亮函数
请你完成 highlight 函数，可以把模版字符串中的插入内容替换掉，并且插入文档以后显示红色。例如：

const yourName = 'ScriptOJ'
const myName = 'Jerry'
document.body.innerHTML = highlight`Hello, ${yourName}. I am ${myName}.`
*/
const highlight = (strings, ...exp) => {
  var str = "";
  for (var i = 0; i < exp.length; i++) {
    str += strings[i] + `<span class="highlight">${exp[i]}</span>`;
  }
  str += strings[i];
  return str;
}

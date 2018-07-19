/*
#44 同字母异序
题目
提交记录
参考答案
讨论区 (25)
同字母异序指的是两个字符串字母种类和字母的数量相同，但是顺序可能不同。

完成 isAnagram，接受两个字符串作为参数，返回true 或者 false 表示这两个字符串是否同字母异序。例如：

isAnagram("anagram", "nagaram") // => return true.
isAnagram("rat", "car") // => return false.
*/
const isAnagram = (str1, str2) => {
  let a = [], b = [];
  a = str1.split("");
  b = str2.split("");
  a.sort();
  b.sort();
  let c = "", d = "";
  a.forEach(i => {
    c += i;
  })
  b.forEach(i => {
    d += i;
  })
  if (c == d) {
    return true;
  }
  return false;
}
console.log(isAnagram("anagram", "nagaram")) // => return true.
console.log(isAnagram("rat", "car")) // => return false.

const isAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');
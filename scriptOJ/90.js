/*
#90 判断两个 Set 是否相同
完成 isSameSet 函数，它接受了两个 Set 对象作为参数，请你返回 true/false 来表明这两个 set 的内容是否完全一致，例如：

const a = {}
const b = 1
const c = 'ScriptOJ'

const set1 = new Set([a, b, c])
const set2 = new Set([a, c, b])

isSameSet(set1, set2) // => true
*/

const isSameSet = (s1, s2) => {
  let flag = true;
  if (s1.size != s2.size) {
    flag = false;
  } else {
    s1.forEach(item => {
      if (!s2.has(item)) {
        flag = false;
      }
    })
  }
  return flag;
}

const a = {}
const b = 1
const c = 'ScriptOJ'
const d = [1, 2];

const set1 = new Set([a,d, c])
const set2 = new Set([a, c, b])

console.log(isSameSet(set1, set2))
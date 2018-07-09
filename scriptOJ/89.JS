/*
#89 数组去重 (by 陈  陈小俊 )
编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。例如：

unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
unique([0, 1, '1', '1', 2])
*/

const unique = (arr) => {
  let newArr = [];
  let a = new Set();
  arr.forEach(i => {
    a.add(i);
  })
  a.forEach(item => {
    newArr.push(item)
  })
  return newArr
}

const merge = (arr) => {
  arr.forEach((el, i) => {
    let min = Math.min.apply(null, arr.slice(i))
    let index = arr.indexOf(min,i)
    arr.splice(index, 1)
    arr.splice(i, 0, min)
  });
  return arr;
}
var a = [10, 21, 32, 11, 16, 40];
console.log(merge(a))
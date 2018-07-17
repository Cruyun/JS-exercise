//#80 数组中的数据划分
// 快排的第一次划分
const partition = (arr) => {
  let pivot = arr[0];
  let j = -1;
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      j++;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  let t = arr[i + 1];
  arr[i + 1] = arr[arr.length - 1];
  arr[arr.length - 1] = t;
  return arr;
}

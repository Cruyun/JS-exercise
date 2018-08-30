const partition3way = (arr) => {
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
    // else if (arr[i] == pivot) {
    //   j++;
    // }
    console.log(j, " ", arr)
  }
  let t = arr[i + 1];
  arr[i + 1] = arr[arr.length - 1];
  arr[arr.length - 1] = t;
  return arr;
}

console.log(partition3way([3,5,8,1,2,3]))
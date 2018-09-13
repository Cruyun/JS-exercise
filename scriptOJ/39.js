const arrWithoutLoop = (n) => {
  if (n == 0) return [];
  
  var count = 0;
  var arr = [];
  const generation = (i) => {
    arr.push(i);
    count++;
    if (count < n ) {
      generation(i + 1)
    }
  }
  generation(0);
  return arr;
}
console.log(arrWithoutLoop(10))
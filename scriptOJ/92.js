const rob = (nums) => {
  let prev = 0;
  let cur = 0;
  nums.map(num => {
    let tmp = cur;
    cur = Math.max(prev + num, cur);
    prev = tmp;
  })
  return cur;
}

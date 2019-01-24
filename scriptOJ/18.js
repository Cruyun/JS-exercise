function commafy (num) {
  let arrs = num.toString().split('.');
  let res = Array.from(arrs[0]).reverse().map((n, i) => {
    if (i == 0 || n == '-' || i % 3 != 0 ) {
      return n
    } else {
      return n + ','
    }
  })
  return res.reverse().join('').concat(arrs[1] ? '.' + arrs[1] : '')
}

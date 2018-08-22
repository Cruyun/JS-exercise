const toChineseNum = (num) => {
  const convertNum = (num) => {
    const numArr = ["零", "一","二", "三", "四", "五", "六", "七", "八", "九"]
    const unitArr = ["", "十", "百", "千"]
    var result = ""
    var arr = ( "" + num ).split("").map(Number)
    var len = arr.length
    
  
    for (let i = 0; i < len; i++) {
      if (arr[i] !== 0) {
        result +=  numArr[arr[i]] + unitArr[len - i - 1];
      } else if (arr[i] === 0 && i === len - 1) {
        continue;
      } else if (arr[i] === 0 && arr[i + 1] !== 0) {
        result += numArr[arr[i]];
      }
    }
    return result;
  }
  
  var high = parseInt(num / 10000);
  var low = num - high * 10000;
  
  var highRes = "";
  var lowRes = "";
  if (low > 0) {
    lowRes = convertNum(low)
  }
  if (high > 0) {
    highRes = convertNum(high) + "万";
  }
  if (low < 1000 && high >= 1 && low > 0) {
    lowRes = "零" + lowRes
  }
  

  return highRes +  lowRes;
}

const hexToRGB = (hex) => {
  const rex = /^\#([0-9A-aF-f]{3}|[0-9A-aF-f]{6})$/
  if (!rex.test(hex)) {
    return null
  }
  let res = [];
  hex = hex.slice(1);
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, '$&$&')
  }
  hex = hex.replace(/../g, color => res.push(parseInt(color, 0x10)))
  return 'rgb(' + res.join(', ') + ')';
}

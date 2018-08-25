const isUSDFormat = (str) => {
  return /^\$(0|([1-9]\d{0,2}(,\d{3})*))(\.\d{2})?$/.test(str)
}

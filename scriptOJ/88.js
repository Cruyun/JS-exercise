(() => {
  const GOLBAL_VARIBLE = window.$
  window.$ = {
    noConflict () {
      window.$ = GOLBAL_VARIBLE
      return this
    }
  }
})()

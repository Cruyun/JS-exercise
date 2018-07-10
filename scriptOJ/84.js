// #84 自动绑定实例方法
// 考查 proxy
const autoBind = (ToBindClass) => {
  return function(...args) {
    const that = new ToBindClass(...args);
    let handler = {
      get(target, key) {
        const val = Reflect.get(target, key);
        if (typeof val === 'function') {
          return val.bind(that);
        } else {
          return val;
        }
      }
    }
    return new Proxy(that, handler)
  }
}
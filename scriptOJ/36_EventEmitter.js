class EventEmitter {
  constructor() {
    this.list = {}
  }
  
  on = (eventName, func) => {
    const cbs = this.list[eventName] || []
    cbs.push(func)
    this.list[eventName] = cbs
  }
  emit = (eventName, ...args) => {
    const isOn = eventName in this.list
    if (!isOn) return;
    
    this.list[eventName].forEach((fn) => {
      fn.call(null, ...args)
    })
  }
  off = (eventName, func) => {
    if (!(eventName in this.list)) {
      return;
    }
    var cbs = this.list[eventName];
    var cb = cbs.indexOf(func)
    if (cb !== -1) {
      cbs.splice(cb, 1)
    }
    
  }
}

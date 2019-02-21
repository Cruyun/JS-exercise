/*使用 generator 模拟 async/await
请你实现一个简单的函数 wrapAsync，使用 generator + promise 来模拟 async/await 进行异步流程的控制。wrapAsync 接受一个 generator 函数作为参数，并且返回一个函数。generator 函数内部可以使用关键字 yield 一个 Promise 对象，并且可以类似 async/await 那样获取到 Promise 的返回结果，例如：

const getData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('My name is ' + name)
    }, 100) // 模拟异步获取数据
  })
}

const run = wrapAsync(function * (lastName) {
  const data1 = yield getData('Jerry ' + lastName)
  const data2 = yield getData('Lucy ' + lastName)
  return [data1, data2]
})

run('Green').then((val) => {
  console.log(val) // => [ 'My name is Jerry Green', 'My name is Lucy Green' ]
})

*/
const wrapAsync = (generatorFn) => {
  return function() {
    var gens = generatorFn(...arguments);
    const promise = new Promise((resolve, reject) => {
      function next(data) {
        var flag = gens.next(data)
        if (!flag.done) {
          flag.value.then(next)
        } else {
          resolve(flag.value)
        }
      }
      next()
    })
    return promise
  }
}


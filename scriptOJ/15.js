/*
#15 高阶组件 + context
完成高阶组件 makeProvider，接受一个任意类型的数据和组件作为参数：

Post = makeProvider({ name: 'Jerry' })(Post)
Post 下的所有子组件都可以通过 this.context.data 获取到传给 makeProvider 的参数。如上面的 Post 及其子组件的内部可以通过 this.context.data.name 获取到 Jerry。

this.context 的用法 https://reactjs.org/docs/legacy-context.html
*/
const makeProvider = (data) => (MyComponent) => {
  return class extends Component {
    static childContextTypes = {
      data:PropTypes.any
    }
    constructor(props) {
      super(props)
    }
    getChildContext(){
      return {data: data}
    }
  
    render(){
      return <MyComponent />
    }
  }
}

// 要注意 refresh: this.fetchData.bind(this)

const loadAndRefresh = (url) => (MyComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        content: ""
      }
    }
    componentWillMount() {
      this.fetchData()
    }
    async fetchData() {
      this.setState({content: "数据加载中..."})
      const data = await getData(url)
      this.setState({content: data})
    }
    render() {
      const props = {
        content: this.state.content,
        refresh: this.fetchData.bind(this),
        ...this.props
      }
      return <MyComponent {...props} />
    }
  }
}

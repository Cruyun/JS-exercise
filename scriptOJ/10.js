// getPostData 已经可以直接使用

class Post extends Component {
  constructor(props) {
    super(props);
    this.state={
      content: ''
    }
  }
  // 已进入页面就要加载数据
  componentWillMount() {
    this.post()
  }
  // 刷新数据用
  post = async () => {
    this.setState({
        content: "数据加载中..."
    })
    const con = await getPostData();
    this.setState({
      content: con
    })
  }
  render () {
    return (
      <div>
        <div className='post-content'>{this.state.content}</div>
        <button onClick={this.post}>刷新</button>
      </div>
    )
  }
}

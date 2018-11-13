class Computer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "off"
    }
  }
  changeStatus() {
    this.setState({ status: this.state.status == "off" ? "on" : "off" })
  }
  render () {
    return (
      <div>
        <button onClick={this.changeStatus.bind(this)}>开关</button>
        <Screen showContent={this.state.status == "on" ? "显示器亮了" : "显示器关了"} />
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: "无内容"
  }
  render () {
    const showContent = this.props.showContent;
    return (
      <div className='screen'>{showContent}</div>
    )
  }
}

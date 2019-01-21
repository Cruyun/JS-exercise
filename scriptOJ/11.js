class Post extends Component {
  show = () => {
    console.log(this.p.clientHeight)
  }
  render () {
    return (<p ref={ p => { this.p = p } } onClick={this.show}>{this.props.content}</p>)
  }
}

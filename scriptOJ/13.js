class BlackBorderContainer extends Component {
  render() {
    return (<div>
      {this.props.children.map((child) => {
        return <div className="blackBorder">{child}</div>
      })
    }
    </div>)
  }
}

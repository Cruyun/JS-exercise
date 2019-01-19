class Input extends Component {
  changeInput = event => {
    if (this.props.setNumber) {
      this.props.setNumber(event.target.value)
    }
  }
  render () {
    return (
      <div>
        <input type='number' onChange={this.changeInput} value={this.props.number} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    const num = this.props.number * 100
    return (
      <div>{num.toFixed(2)+"%"}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  handleChange = (num) => {
    this.setState({number: num})
  }
  render () {
    return (
      <div>
      <Input setNumber={this.handleChange} number={this.state.number} />
      <PercentageShower number={this.state.number} />
      </div>
    )
  }
}

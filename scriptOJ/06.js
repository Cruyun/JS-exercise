class Dog extends Component {
  constructor () {
    super();
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }
  
  bark() {
    this.setState({
      isBarking: true
    })
    setTimeout(() => {
      this.setState({
      isBarking: false
    })
    }, 50
    )
  }
  
  run(){
    this.setState({
      isRunning: true
    })
    setTimeout(() => {
      this.setState({
      isRunning: false
    })
    }, 50
    )
  }
  
  barkRun(){
    this.run();
    this.bark();
  }
 
  render () {
    return (<div onClick={this.barkRun.bind(this)}>DOG</div>)
  }
}

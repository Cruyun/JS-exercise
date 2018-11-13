class Dog extends Component {
  bark () {
    console.log('bark')
  }
  
  run () {
    console.log('run')
  }
  
  render () {
    return (<div onClick={() => {this.run();this.bark()}}>DOG</div>)
  }
}

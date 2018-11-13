// Component 已经可以直接使用

class House extends Component {
  render() {
    return (
      <div className="house">
        <h1>House</h1>
        <Room />
        <Bathroom />
      </div>
      )
  }
  
}

class Room extends Component {
  render() {
    return (
      <div className="room">
        <h1>Room</h1>
        <Man />
        <Dog />
        <Dog />
      </div>
      )
  }
}

class Bathroom extends Component {
  render() {
    return (
      <div className="bathroom">Bathroom</div>
    )
  }
}

class Man extends Component {
  render() {
    return (
      <div className="man">Man</div>
    )
  }
}

class Dog extends Component {
  render() {
    return (
      <div className="dog">Dog</div>
    )
  }
}

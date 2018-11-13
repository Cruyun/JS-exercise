class Lesson extends Component {
  handleClick() {
    console.log(`${this.props.index} - ${this.props.lesson.title}`);
  }
  render() {
    const lesson = this.props.lesson
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
      )
  }
}

class LessonsList extends Component {
  render() {
    return (
      <div>
        {this.props.lessons.map((lesson, i) => <Lesson key={i} index={i} lesson={lesson} />)}
      </div>
      )
  }
}

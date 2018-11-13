// 函数 getNotificationsCount 已经可以直接调用

class Notification extends Component {
  render () {
    const cnt = getNotificationsCount();
    return (
        <div>{ cnt != 0 ? (<span>有({cnt})条未读消息</span>) : (<span>没有未读消息</span>)}</div>
      )
  }
}

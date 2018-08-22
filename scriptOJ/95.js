class VNode {
  constructor (tag, props, children){
    this.tagName = tag;
    this.props = props;
    this.children = children;
  }
  render() {
    const dom = document.createElement(this.tagName);
    if (this.props) {
      let propsArr = Object.keys(this.props)
      propsArr.map(prop => {
        dom.setAttribute(prop, this.props[prop])
      })
    }
    if (this.children) {
      this.children.map(child => {
        dom.appendChild(child instanceof VNode ? child.render() : document.createTextNode(child))
      })
    }
    return dom
  }
}

const h = function(tag, props, children) {
  return new VNode(tag, props, children);
}

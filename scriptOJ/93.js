class VNode {
  constructor (tag, props, children){
    this.tagName = tag;
    this.props = props;
    this.children = children;
  }
}

const h = function(tag, props, children) {
  return new VNode(tag, props, children);
}

/* 找出每一层节点的最大子节点数

*/
const findMostProductivePigChildrenCount = (dom) => {
  let arr = [...dom.children]
  let len = [dom.children.length]
  while (arr.length) {
    let tmp = []
    len.push(Math.max(...arr.map(node => {
      return node.children.length
    })))
    arr.forEach(node => {
      tmp.push(...node.children)
    })
    arr = tmp
  }
  return len
}

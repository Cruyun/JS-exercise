// #98 判断两个矩形是否重叠
onst isOverlap = (rect1, rect2) => !( rect1.y + rect1.height < rect2.y || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.x > rect2.x + rect2.width)

const rect1 = { x: 100, y: 100, width: 100, height: 100 }
const rect2 = { x: 200, y: 200, width: 100, height: 100 }

console.log(isOverlap(rect1, rect2))
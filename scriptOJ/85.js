// #85 优先队列
class PriorityQueue {
  constructor() {
    this.arr = [];
    this.isSorted = false;
  }
  add (i) {
    this.arr.push(i);
    this.isSorted = false;
  }
  
  remove () {
    if (!this.isSorted) {
      this.arr.sort((a, b) => a - b);
      this.isSorted = true;
    }
    return this.arr.pop();
  }
}

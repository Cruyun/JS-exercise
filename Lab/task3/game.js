// 构造Level对象，构造函数的参数是一个定义关卡的数组
function Level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];
    
    for (var y = 0; y < this.height; y++) {
        var line = plan[y], gridLine
    }
}
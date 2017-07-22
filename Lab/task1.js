// Task1
// (1)定义一个Person类
// 定义属性: name、age
// 定义方法:
// introduce
// 输出“I am (name), I am (age) years old!”
// Test
var Person = function(name,age) {
	this.name = name;
	this.age = age;
	this.introduce = function(name,age) {
		console.log("I am ", this.name, ", I am ",this.age, "years old!")
	}
}

var jerry = new Person("Jerry", 2);
jerry.introduce();

// (2)定义一个Vector类，表示一个二维空间内的坐标
// 定义属性: x、y
// 定义方法:
// plus
// 参数传入一个Vector，两个向量相加，返回一个新的Vector
// minus
// 参数传入一个Vector，两个向量相减，返回一个新的Vector

var Vector = function(x,y) {
	this.x = x;
	this.y = y;
	this.plus = function(Vector_b) {
		return new Vector(this.x + Vector_b.x, this.x + Vector_b.y)
	};
	this.minus = function(Vector_b) {
		return new Veter(this.x - Vector_b.x, this.x - Vector_b.y)
	}
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(2, 2).plus(new Vector(1, 1)));

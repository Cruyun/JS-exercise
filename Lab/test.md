## 自测练习


```
var a = function(){} //一个空的对象
a.b = 1
a.prototype.b = 2
a.prototype.c = 3
a.prototype.d = 4
console.log(a.b)  // -->1
console.log(new a().b) //-->2

var foo = new a() //一个新对象被创建。它继承自a.prototype
foo.c = 5
console.log(foo.c) //-->5
console.log(foo.d) // -->4
```
知识点：《Eloquent JavaScript》Chapter 6 原型和构造函数

每个对象都有一个私有属性(称为是[[Prototype]]), 它持有一个连接到另一个称为其 prototype 对象的链接。该原型对象具有一个自己的原型，等等，直到达到一个对象的 prototype 为 null。null 没有 prototype，是这个 prototype chain 中的最后一个环节。

---

```
var Foo = function(){
  this.a = 1
  return {
    a:2
  }
}

var bar = new Foo()
console.log(bar.a) //--> 2
```
知识点：this的运用之构造函数。

《Eloquent JavaScript》："构造函数中包含了指向新对象的变量this，除非构造函数显式地返回了另一个对象的值，否则构造函数会返回这个新创建的对象"。本题返回了a:2，所以原来构造的对象被丢弃，console结果为2

```
var Foo = function(){
  this.a = 1
  return {
    a:2
  }
}

var bar = Object.create(Foo())
console.log(bar.a) //-->2
```

```
var Foo = function(){
  this.a = 1
}
var bar = new Foo()
console.log(bar.a) //--> 1
```

```
var Foo = function(){
   a:2;
}
var bar = new Foo()
console.log(bar.a) //--> undefined
```
``` a:2;```是在声明一个对象的时候使用的，比如
`var foo = {
      a:2;
  } `

[JavaScript中的对象查找](http://www.otakustay.com/object-lookup-in-javascript/)里关于this：

首先，this对象只会在一个函数中需要确定，如果是在全局域下，this永远为Global对象，在浏览器中通常就是window对象。而在javascript中，函数的调用一共有4种方式：
Function Invocation Pattern

诸如`foo()`的调用形式被称为Function Invocation Pattern，是函数最直接的使用形式，注意这里的foo是作为单独的变量出现，而不是属性。

在这种模式下，foo函数体中的this永远为Global对象，在浏览器中就是window对象。

Method Invocation Pattern

诸如`foo.bar()`的调用形式被称为Method Invocation Pattern，注意其特点是被调用的函数作为一个对象的属性出现，必然会有“.”或者“[]”这样的关键符号。
在这种模式下，bar函数体中的this永远为“.”或“[”前的那个对象，如上例中就一定是foo对象。

Constructor Pattern

`new foo()`这种形式的调用被称为Constructor Pattern，其关键字`new`就很能说明问题，非常容易识别。

在这种模式下，foo函数内部的this永远是new foo()返回的对象。

Apply Pattern

`foo.call(thisObject)`和`foo.apply(thisObject)`的形式被称为Apply Pattern，使用了内置的`call`和`apply`函数。

在这种模式下，`call`和`apply`的第一个参数就是foo函数体内的this，如果thisObject是`null`或`undefined`，那么会变成Global对象。

应用以上4种方式，确定一个函数是使用什么样的Pattern进行调用的，就能很容易确定this是什么。

另外，this是永远不会延作用域链或原型链出现一个“查找”的过程的，只会在函数调用时就完全确认。

---
```
var map = Object.create(null); // 创建一个原型为null的空对象
console.log("toString" in map); // false
```
空对象中没有“toString”属性。

```
var map = Object.create({a:1});
console.log("toString" in map); // true
console.log("a" in map); // true
```
《Eloquent JavaScript》 6.6:

JavaScript会区分“可枚举（enumerable)”与“不可枚举（nonenumberable）”属性。
我们创建并赋予对象的所有属性都是可枚举的。

---

```
function foo(obj){
  return Object.prototype.toString.call(obj).slice(8,-1)
}
```
请说明函数foo的作用:

检测一个对象的数据类型并返回。该对象是截取obj的第八位到倒数第一位（包含第八不包含倒数第二）

`Object.prototype.toString.call(obj)`  // "[object Array]"

`Object.prototype.toString.call([]).slice(8, -1)` // "array"

**Object.prototype.toString()**：一个表示该对象的字符串

**call方法**：调用一个函数, 其具有一个指定的this值和分别提供的参数(参数的列表)。

**slice方法**：提取字符串的某个部分，并以新的字符串返回被提取的部分。返回值是一个新的字符串（包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。）

语法： stringObject.slice(start,end)

| 参数        | 描述   |  
| --------   | -----  | 
|  start     | 要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。 |  
| end        |   紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。   | 

---
```
var a = {}
a.bar = 2

Object.defineProperty(a, "foo",
                      { value: "hi"});

console.log(delete a.foo) //false
console.log(delete a.bar) //true

a.foo = "world"
console.log(a.foo) // "hi"


for (var key in a){
  console.log(key); 
}

console.log("foo" in a); // true
console.log("bar" in a); // false
```
Object.defineProperty函数定义不可枚举属性，该函数允许我们创建属性时控制属性类型。

Object.definePorperty默认是immutable的,所以writable enumerable都是false
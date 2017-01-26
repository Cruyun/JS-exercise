for (var current = 20; ; current++){
	if (current % 7 ==0)
		break;
}
console.log(current);

/* loopinga triangle*/
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

/*fizzbuzz*/
/*my wrong answer*/
for (var Number = 1; Number <= 100; Number++){
	if (Number % 3 ==0)
	  console.log("Fizz");
	if (Number % 5 ==0)
	  console.log("Buzz");
	if (Number % 15 ==0)
	  console.log("fizzbuzz")
    else
      console.log(Number)
}
   
    console.log(Number);
    /*correct answer*/
    for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

/*my cade*/
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0 && n % 15 != 0)
    output += "Fizz";
  if (n % 5 == 0 && n % 15 != 0)
    output += "Buzz";
  if (n % 15 == 0)
    output +="FizzBuzz";
    console.log(output || n);
}

/*chapter 3*/
var square = function(x) 
{
	return x * x;
};

console.log(square(12));

var makeNoise = function(){
	console.log("pling!");
}
makeNoise();

var power = function (base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++) 
		result *= base;
	return result;
};

console.log(power(2,10));

/*my code*/
var power = function (x, y) {
	var result = 1;
	for (var x = 0; x < y; x++)
		result = x;
	return result;/*如果没有result，将返回undefined*/
};

console.log(power(2,10));


/*3.2*/
var x = "outside";

var f1 = function () {
	var x = "inside f1";
};
f1();
console.log(x);


/*	全局变量*/
var f2 = function(){
	x = "inside f2";
};
f2();
console.log(x);

/*3.3嵌套函数-1*/
var landscape = function(){
	var result = "";
	var flat = function(size){
		for (var count = 0; count < size; count++)
			result += "_";
	};
	var mountain = function(size) {
		result += "/";
		for (var count = 0; count < size; count++)
			result += "'";
		result += "\\";
	}

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;

}
console.log(landscape());

/*3.3嵌套函数-2*/
var something = 1;
{
	var something = 2;
	// bo stuff with variable something.. 
}
// outside of the block again..

//3.5符号声明
function square(x){
	return x * x;
}

console.log("the future say:", future());

function future() {
	return "we shall have no flying cars";
}

function example() {
	function a() {} //okay
}

// 调用栈
function greet(who) {
	console.log("hello" + who);
}
greet("harry");
console.log("bye");

//可选参数
alert("hello", "good morning", "how do you do"); //alert只接受一个函数

function power(base, exponent){
	if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result += base;
	return result;
}

console.log(power(4));
console.log(power(4,3));









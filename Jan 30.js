//Jan 30
//4.11
console.log([1, 2, 3, 2, 1].indexOf(2)); //1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //3
console.log([0, 1, 2, 3, 4].slice(2, 4)); //2, 3起始索引元素包含，结束不包含
console.log([0, 1, 2, 3, 4].slice(2)); //2, 3, 4

//contat拼接两个数组
function remove(array, index) {
	return array.slice(0, index)
	.contat(array.slice(index + 1));
}

console.log("one two three".indexOf("ee")); //11
console.log("  okay \n".trim); //okay

var string = "abc";
console.log(string.chaAt(o)); //a
console.log(string[1]); // b

//4.13
function noArguments() {}
noArguments(1, 2, 3); //this is okay

function threeArguments(a, b, c) {}
threeArguments(); // and so is this

//4.14
function randomPointCircle(radius) {
	var angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.cos(angle),
	        y: radius * Math.sin(angle)};
}
console.log(randomPointCircle(2));

//4.17.1.
function range(start, end) {
	var array = [];
	for (var i = start; i <= end; i++)
		array.push(i);
	return array;
}

function sum(array) {
	var total = 0;
	for (var i = 0; i <array.length; i++)
		total += array(i);
	return total;
}

function range(start, end, step) {
	var array = [];
	if (step == null) step = 1;
	if (step > 0) {
		for (var i = start; i <= end; i += step)
			array.push(i);
	}
	else {
		for (var i = start; i >= end; i += step)
			array.push(i);
	}
	return array;
}

//4.17.2
function reverseArray(array) {
	var output = [];
	for (var i = array.length - 1; i >= 0; i--)
		output.push(array[i]);
	return putput;
}

console.log(reverseArray([A, B, C]));

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//4.17.3
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//5.3
function greaterThan(n) {
	return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
	console.log("called with", arg, "- got", val);
      return val;
	}
}
noisy(Boolean)(0);

function unless(test, then) {
	if (!test) then();
}
function repeat(times, body) {
	for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n){
	unless(n % 2, function() {
		console.log(n, "is even");
	});
});

//5.4
function transparentWrapping(f) {
	return function() {
		return f.apply(null, arguments);
	};
}

//5.6
console.log(ancestry.filter(function(person){
	return person.father == "carel";
}));




//习题4.17
function range(start, end) {
	var result = [];
	for (var num = start; num <= end; num++)
		result.push(num);
	return result;
}
console.log(range(1,10))

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++)
		total += array[i];
	return total;
}
console.log(sum(range(1,10)));

function newRange(start,end,step) {
	if(step == null) step = 1;
	var result = [];
	if (step >= 0) {
		for (var num = start; num <= end; num+=step)
		result.push(num);
	}
	else if (step < 0) {
		for (var num = start; num >= end; num+=step)
		result.push(num);
	}
	return result;
}
console.log(newRange(1,10,2))
console.log(newRange(1,10))
console.log(newRange(5,2,-1))

//4.17.2

function reverseArray(array) {
	var result = [];
	for (var i = array.length - 1; i >= 0; i--) {
		result.push(array[i]);
	}
	return result;
}

function reverseArraryInPlace(array) {
	for (var i = 0; i < Math.floor(array.length / 2); i++){
		var temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}

console.log(reverseArray([5,4,3,2,1]))
console.log(reverseArrayInPlace([5,4,3,2,1]))

//4.17.3
function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0 ; i++) {
		list = {
			value: array[i],
			rest: list
		}
	}
	return list;
}

function listToArray(list) {
	var array = [];
	for (var i = list; i ; i = i.rest)
		array.push(i.value);
	return array;
}

function prepend(va, list) {
	var newlist = {value: va, rest: list}
	return newlist;
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
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

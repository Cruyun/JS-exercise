# 5.14.1
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(first, second) {
	return first.concat(second);
}, []))

# 5.14.4
function every(array, prediction) {
	for (var i = 0; i < array.length; i++) {
		if (!prediction(array[i]))
			return false;
	}
	return true;
}

function some(array, prediction) {
	for (var i = 1; i < array.length; i++) {
		if (prediction(array[i]))
			return true;
	}
	return false;
}
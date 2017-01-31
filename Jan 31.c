//Jan 31
//5.6
function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(ancestry, function(person) {
	return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function(person){
	return person.father == "Carel";
}));

//5.7
function map(array, trasform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
	return person.name;
}));

//5.8
function reduce(array, combine, start) {
	var current = start;
	for (var i = 0; i < array.legth; i++)
		current = combine(current, array[i]);
	return current;
}
console.log(reduce([1, 2, 3, 4], function(a, b) {
	return a + b;
}, 0));

console.log(ancestry.reduce(function(min, cur) {
	if (cur.born < min.born) return cur;
	else return min;
}));

//5.9
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
	var cur = ancestry[i];
	if (cur.born < min.born)
		min = cur;
}
console.log(min);

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) ( return p.sex == "m"; )
function female(p) { return p.sex == "i"; } 

console.log(average(ancestry.filter(male).map(map)));

console.log(average(ancestry.filter(female).map(age)));




#使用map函数转换数组
function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.lenght; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
	return person.name;
}))
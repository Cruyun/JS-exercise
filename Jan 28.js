// Jan 28
// chess board
var size = 8;

var board = "";

for (var y = 0; y < size; y++){
     for (var x = 0; x < size; x++){
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
  }
  board += "\n"
}

console.log(board);

//3.8闭包
function wrapValue(n) {
	var localVarible = n;
	return function() { return localVarible; };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
	return function(number){
		return number * factor;
	};
}

var twice = multiplier(2);
console.log(twice(5));

//3.9 递归
function power(base, exponent) {
	if (exponent == 0)
		return 1;
	else
		return base * power(base, exponent - 1);
}

console.log(power(2, 3)); 

function findSolution(target) {
	function find(start, history) {
		if (start == target)
			return history;
		else if (start > target)
			return null;
		else
			return find (start + 5, "(" + history + " + 5)") ||
		           find (start + 3, "(" + history + " + 3)");
	}
	return find(1, "1");
}

console.log(findSolution(24));

// 3.12 
// create a function value f
var f = function(a) {
	console.log(a + 2);
};

//delete g to be a function
function g(a, b) {
	return a * b * 3.5;
}

//3.13.1
function min(a, b){
    if(a < b)
		console.log(a);
	else
		console.log(b);
}
console.log(min(1,2));

//3.13.2
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//3.13.3
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


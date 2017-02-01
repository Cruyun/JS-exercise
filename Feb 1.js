//Feb 1
//5.12
var theSet = ["carel", "maria", "donald"];
function isInSet(set, person) {
	return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function(person) {
	return isInSet(theSet, person);
}));

//5.14.1数组降维 reduce concat
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

// → [1, 2, 3, 4, 5, 6]

//6.2
var rabbit = {};
rabbit.speak = function(line) {
  console.log("the rabbit says '" + line + "'");
};
rabbit.speak("I'm alive");

function speak(line) {
	console.log("the" + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("oh my ears and whiskers," + "how late it's getting!");

//6.3
console.log(Object.getPrototypeOf(isNaN) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

//6.4
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black

//6.6
Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// → The killer rabbit dances a jig.

//6.9
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}
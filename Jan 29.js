//Jan 29

// 4.2
var listNumber = [2, 3, 5, 7, 11];
console.log(listNumber[1]); //3
console.log(listNumber[1 - 1]); //2

//4.4
var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase()); //返回副本将所有字母换成大写

var mack = [];
mack.push("MACK");
mack.push("the", "Knife");
console.log(mack);
console.log(makc.join(" "));
console.log(mack.pop());
console.log(mack);

//4.5
var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1, squirrel);
console.log(day1, wolf);
day1.wolf = false;
console.log(day1.wolf);

var description = {
	work: "went to work",
	"touched tree": "touched a tree"
}；

//delete
var anObject = {left: 1, right:2};
console.log(anObject.left);
//1
delete anObject.left;
console.log(anObject.left); //undefined
console.log("left" in anObject); //false
console.log("right" in anObject); //true

var journal = [
  {events: ["work", "touched tree", "pizza", "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
  {events: ["weekend"],
    squirrel: true},
    /*and so on*/
];

//4.8
function hasEvent(event, entyry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i], index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}
console.log(tableFor("pizza", JOURNAL));

//4.9
var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map); //true
console.log(map["touched tree"]); //-0.081

for (var event in map)
  console.log("the correlation for" + event + "' is" + map[event]);
// the correlation for 'pizza' ia 0.069
// the correlation for 'touched tree' is -0.081

//4.10
function gatherCorrelations(journal) {
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++) {
			var event = events[i];
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var event in correlations)
	console.log(event + ": " + correlationss[event]);

for (var event in correlationss) {
	var correlations = correlationss[event];
	if (correlation > 0.1 || correlation < -0.1)
		console.log(event + ": " + correlation);
}

4.11
var todolist = [];
function rememberTo(task) {
	todolist.push(task);
}
function urgentlyRemeberTo(task) {
	todolist.ubshift(task);
}
















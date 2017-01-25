console.log(true ? 1 : 2);
console.log(false ? 1 :2);
console.log(null == undefined);
console.log(null || "user");
console.log("Karl" || "user");

var ten = 10;
console.log(ten * ten);

console.log(typeof 4.5)；
console.log(typeof "x")；
console.log(- (10 - 2))；
console.log(3 > 2)；
console.log(3 < 2)；
console.log("Aardvark" < "Zoroaster")；
console.log("Itchy" != "Scractchy")；
console.log("NaN")；

console.log(true ? 1 : 2);
console.log(false ? 1 :2);
console.log(null == undefined);
console.log(null || "user");
console.log("Karl" || "user");

var ten = 10;
console.log(ten * ten);

var luigisdebt = 140;
luigisdebt = luigisdebt - 35;
console.log(luigisdebt);

var one = 1, two = 2;
console.log(one + two);

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

var theNumeber = Number(prompt("pick a number",""));
alert("Your number is the square root of " + 
	theNumeber * theNumeber);
 
 var theNumeber = Number(prompt("pick a number", ""));
 if (!NaN(theNumeber))
 	alert("you number is the square of " + 
 		theNumeber * theNumeber);
 else
 	alert("Hey. Why didn't you give me a number");

var num = Number(prompt("pick a number", "0"));
 if (num < 10)
 	alert("samll");
 else if (num < 100)
 	alert("Medium");
 else
 	alert("large");

 /*输出0-12之间的偶数*/
 var number = 0;
 while (number <= 12){
 	console.log(number);
 	number = number + 2;
 }

/*计算2的10次幂*/
 var result = 1;
 var counter = 0;
 while (counter < 10){
 	result = result + 2;
 	counter = counter + 1;
 }
 console.log(result);

do {
	var name = prompt("who are you");
}while (!name);
console.log(name);


/*跳出循环*/
for (var current = 20; ; current++){
	if (current % ? ==0)
		break;
}
console.log(current);

/*更新变量*/
for (var number = 0; number <= 12; number += 2)
  console.log(number);

/*switch条件分支*/
if (varible == "value1") action1();
else if (varible == "varible2") action2();
else if (varible == "varible3") action3();
else defaultAction();

swith (prompt("what is the weather like")) {
	case "rainy":
	  console.log("remember to bring an umbrella");
	  break;
    case "sunny":
      console.log("dress lightly");
    case "cloudy":
      console.log("go outside");
      break;
    default:
      console.log("unknown weather type!");
      break;
}





var num =[2,3,4,5,6,7];
num.pop();
console.log(num);

num.unshift(1);
console.log(num);

var squareNum = num.map(function(x){
	return x*x;
   }
)
console.log(squareNum);

var oddNum = [];
for (var i = 0; i<6; i++)
     if(squareNum[i]%2!=0)
	     oddNum.push(squareNum[i])
console.log(oddNum);



function isNumberOdd(number) {
	if(number % 2 === 0) {
		return false;
	} else {
		return true;
	}
}

var x = isNumberOdd(11);
console.log(x);
console.log(isNumberOdd(8));
console.log(isNumberOdd(0));
console.log(isNumberOdd(23));




function isNumberOdd(number1) {
	return number1 % 2 !== 0;
}

console.log(isNumberOdd(3));
console.log(isNumberOdd(0));
console.log(isNumberOdd(26));
console.log(isNumberOdd(11));


function factorial(naturalNumber) {
	if(naturalNumber < 0) {
		return 0;
	}
	var result = 1;
	for(i = 1; i <= naturalNumber; i++) {
		result = result * i;
	}
	return result;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(0));
console.log(factorial(-3));
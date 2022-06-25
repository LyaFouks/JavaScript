var carSeller1 = {
	fristName: "Jack",
	lastName: "White",
	registrationYear: 2017,
	hasDiscount: true,
	discountCalculation: function(year) {
		var discount;
		var numbersOfYear = 2019 - year;
		if(numbersOfYear <= 2) { 
			discount = 0;
		}else if((numbersOfYear > 2) && (numbersOfYear <= 5)) {
			discount = 20;
		}else if(numbersOfYear > 5) {
			discount = 30;
		}
		return discount;

	}
}

console.log(carSeller1.discountCalculation(2017));
var carSeller1 = {
	fristName: "Jack",
	lastName: "White",
	registrationYear: 2016,
	hasDiscount: true,
	discount: 0,
	calculateDiscount: function(year) {
		var discount;
		var numbersOfYear = 2019 - this.registrationYear;
		if(numbersOfYear <= 2) { 
			discount = 0;
		}else if((numbersOfYear > 2) && (numbersOfYear <= 5)) {
			discount = 20;
		}else if(numbersOfYear > 5) {
			discount = 30;
		}
		this.discount = discount;

	}
}

carSeller1.calculateDiscount();

console.log(carSeller1);
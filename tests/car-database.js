var carDatabase = [
{
		model: "CX7",
		year: 2010,
		color: "red",
		isCarSelled: true
},
{
		model: "Vectra",
		year: 2012,
		color: "blue",
		isCarSelled: false
},
{
		model: "Benz",
		year: 2020,
		color: "black",
		isCarSelled: true
	
},
{
		model: "Prius",
		year: 2015,
		color: "grey",
		isCarSelled: false
}

]

// for(var i = 0; i < carDatabase.length; i++) {
// 	if(carDatabase[i].isCarSelled === false) {
// 		console.log(carDatabase[i]);
// 	}
// }

carDatabase.forEach(function(car) {
	if(car.isCarSelled === false) {
		console.log(car);
}
})

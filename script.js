// var carToyota = ["Camry", 2010, "sedan", "black", true];
// console.log(carToyota[2]);


var carToyota = {
	model: "Camry",
	year: 2010,
	carBody: "sedan",
	color: "black",
	hasAirbag: true

}

var x = "hasAirbag";
console.log(carToyota[x]);
console.log(carToyota["hasAirbag"]);
console.log(carToyota.color);

carToyota.color = "red";
console.log(carToyota.color);
console.log(carToyota);
carToyota.year += 2
console.log(carToyota);

var carMazda = {};
var carOpel = new Object();
carOpel.year = 2015;
carOpel.model = "CX231" ;
carOpel.carBody = "sedan";
carOpel.color = "blue";
carOpel.hasAirbag = true;
carOpel.doorNumber = 3;
console.log(carOpel);
	
carMazda.year = 2018;
carMazda.model = "CX7" ;
carMazda.carBody = "crossover";
carMazda.color = "blue";
carMazda.hasAirbag = false;
carMazda.doorNumber = 4;
console.log(carMazda);

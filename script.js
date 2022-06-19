var userName = "Jana";
var userWeight = 91;


// if(userWeight > 90) {
// 	console.log(userName + " has redundant weight.");
// }
// else {
// 	console.log(userName + " has normal weight.");
// }

var weightDescription

weightDescription = userWeight > 90 ? " redundant" : " normal";

userWeight > 90 ? console.log(userName + " has" + weightDescription + "weight.") : console.log(userName + " has" + weightDescription + "weight.");
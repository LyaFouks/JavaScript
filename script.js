
function complexHello(helloText , name, age) {
	console.log(helloText + "My name is " + name + ". I am " + age + " years old.");
}


function square(number) {
	return number * number;
}

var x= square(2);
console.log(x);

square(314);

function isSquareBig(side) {
	var squareArea = square(side);
	if(squareArea > 100) {
		return true;
	} else {
		return false;
	}
}

console.log(isSquareBig(2));

// function rectangurlarArea(width , height) {
// 	console.log(width * height);
// }

// rectangurlarArea(4,5);

// complexHello("Hey!", "John", 30);
// complexHello("Hi!", "Joe", 40);
// complexHello("Hello!", "Joane", 20);
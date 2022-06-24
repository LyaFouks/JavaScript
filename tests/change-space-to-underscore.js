function changeSpaceToUnderscore(text) {
	var resultText = text.replace(/ /g, "_");
	return resultText
}

console.log(changeSpaceToUnderscore("create function"));
console.log(changeSpaceToUnderscore("black warm blanket"));
console.log(changeSpaceToUnderscore("Jozefina"));
var button = document.querySelector("button");

var isBackgroudApplied = 0;

button.addEventListener("click", function() {
	if(isBackgroudApplied === 0) {
		document.querySelector("body").style.background = "blue";
		isBackgroudApplied = 1;
	} else {
		document.querySelector("body").style.background = "white";
		isBackgroudApplied = 0;
	}
});




button.addEventListener("click", function() {
	document.querySelector("body").classList.toggle("ryb")

});
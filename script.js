var liElements = document.querySelectorAll("li");

console.log(liElements);

var chanheLiColor = function() {
		this.style.color = "green";
	};

for (var i = 0; i < liElements.length; i++) {
	liElements[i].addEventListener("click", chanheLiColor)
}
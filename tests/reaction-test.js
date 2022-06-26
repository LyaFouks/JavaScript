var startTime = new Date().getTime();

var makeShapeVisible = function() {
function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

	var shape = document.getElementById("some");
	var top = Math.random() * 400;
	var left = Math.random() * 600;
	var width = Math.random() * 200 + 50;
	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.width = width + "px";

if(Math.random() < 0.3) {
	shape.style.borderRadius = "50%";
	shape.style.backgroundColor = getRandomColor();
	shape.style.borderBottom = "0";
} else if(Math.random() >= 0.3 && Math.random() <=0.7) {
	shape.style.borderRadius = "0%";
	shape.style.backgroundColor = getRandomColor();
	shape.style.borderBottom = "0";
} else if(Math.random() > 0.7) {
	shape.style.borderRadius = "0%";
	shape.style.left = "0";
	shape.style.width = "0";
	shape.style.borderLeft = "50px solid transparent";
	shape.style.borderRight = "50px solid transparent";
	shape.style.borderBottom = "100px solid" + getRandomColor();
	shape.style.backgroundColor = "transparent";
}
	
	shape.style.display = "block";
	startTime = new Date().getTime();
}


setTimeout(makeShapeVisible, Math.random() * 1000);


document.getElementById("some").onclick = function() {
	
	var finishTime = new Date().getTime();
	document.getElementById("some").style.display = "none";
	var reactionTime = (finishTime - startTime) / 1000;
	document.getElementById("some1").innerHTML = reactionTime + " seconds.";
	setTimeout(makeShapeVisible, Math.random() * 1000);
}

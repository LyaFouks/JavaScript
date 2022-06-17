var userHeight = prompt("Введите ваш рост в метрах");
var userWeight = prompt("Введите ваш вес в килограммах");
var bodyIndex = userWeight / (userHeight * userHeight);
var doYouHaveExcessWeight = bodyIndex > 28
alert('У вас лишний вес: ' + doYouHaveExcessWeight);
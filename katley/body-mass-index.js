var userHeight = prompt("Введите ваш рост в метрах");
var userWeight = prompt("Введите ваш вес в килограммах");
var userAge = prompt("Введите ваш возраст");
var bodyIndex = userWeight / (userHeight * userHeight);

if(userAge >= 18 && userAge <= 25 && bodyIndex < 17.5) {
	alert('У вас недостаточный вес, опасно для здоровья!');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex <= 17.5) {
	alert('У вас недостаточный вес, опасно для здоровья!');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 17.5 && bodyIndex <= 19.5 ) {
	alert('Вес слегка снижен, не опасно для здоровья.');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 19.5 && bodyIndex <= 23) {
	alert('У вас нормальный вес.');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 23 && bodyIndex <= 27.5) {
	alert('У вас излишний вес.');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 27.5 && bodyIndex <= 30) {
	alert('У вас ожирение 1й степени.');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 30 && bodyIndex <= 35) {
	alert('У вас ожирение 2й степени.');
}

else if(userAge >= 18 && userAge <= 25 && bodyIndex > 35 && bodyIndex <= 40) {
	alert('У вас ожирение 3й степени.');
} 
else if(userAge >= 18 && userAge <= 25 && bodyIndex > 40) {
	alert('У вас ожирение 4й степени');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex <= 18) {
	alert('У вас недостаточный вес, опасно для здоровья!');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 18 && bodyIndex <= 20) {
	alert('Вес слегка снижен, не опасно для здоровья.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 20 && bodyIndex <= 26) {
	alert('У вас нормальный вес.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 26 && bodyIndex <= 28) {
	alert('У вас излишний вес.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 28 && bodyIndex <= 31) {
	alert('У вас ожирение 1й степени.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 31 && bodyIndex <= 36) {
	alert('У вас ожирение 2й степени.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 36 && bodyIndex <= 41) {
	alert('У вас ожирение 3й степени.');
} 
else if(userAge >= 25.9 && userAge <= 46 && bodyIndex > 41) {
	alert('У вас ожирение 4й степени');
}
else {
	alert('Ваши данный не подходят для текущей форумлы расчета.');
}

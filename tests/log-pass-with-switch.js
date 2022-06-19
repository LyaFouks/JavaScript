var userName = prompt("Enter your name: ");
var userPassword = prompt("Enter your password: ");
var messageForLogUser = "Welcome to site " + userName + "!";
var messageForLogAdmin = "Welcome, you can change this site.";

switch(true) {
	case userName === "Jack" || userPassword === 1111 :
		alert(messageForLogUser);
		break;
	case userName === "John" || userPassword === 2222 :
		alert(messageForLogUser);
		break;
	case userName === "Admin" || userPassword === 3333 :
		alert(messageForLogAdmin);
		break;
	default :
		alert("You enter wrong login name or password.")

}
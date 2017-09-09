var a = 'Addition';
var s = 'Subtraction';
var d = 'Division';
var m = "Multiplication";
var calculator = prompt('Welcome to the Calulator. Let me just take some input from you. \nPlease choose the following: \n' + a + ' - a \n' + s + ' - s \n' + d + ' - d \n' + m + ' - m');
var firstNumber = prompt('first number');
var secondNumber = prompt ('second number');
var calculator = true;

if (a !== true) {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber + secondNumber);
} else {
	alert('You did not enter your first number.');
}

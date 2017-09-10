var a = 'Addition';
var s = 'Subtraction';
var d = 'Division';
var m = 'Multiplication';
var p = 'To the Power of';
var r = 'Square Root'

var calculator = prompt('Welcome to the Calulator. Let me just take some input from you. \nPlease choose from the following: \n' + a + ' - a \n' + s + ' - s \n' + d + ' - d \n' + m + ' - m \n' + p + ' - p \n' + r + ' - r');



// var calculator = true;

if (calculator === "a") {
	var firstNumber = prompt('First number, please');
	var secondNumber = prompt ('Second number, please');
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber + secondNumber);
} else if (calculator === "s") {
	var firstNumber = prompt('First number, please');
	var secondNumber = prompt ('Second number, please');
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber - secondNumber);
} else if (calculator === "d") {
	var firstNumber = prompt('First number, please');
	var secondNumber = prompt ('Second number, please');
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber / secondNumber);
} else if (calculator === "m") {
	var firstNumber = prompt('First number, please');
	var secondNumber = prompt ('Second number, please');
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber * secondNumber);
} else if (calculator === "p") {
	var firstNumber = prompt('First number, please');
	var secondNumber = prompt ('Second number, please');
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber ** secondNumber);
} else if (calculator === "r") {
	var sqrRootNumber = prompt('Choose a number to Square Root, please');
	sqrRootNumber = parseFloat(sqrRootNumber);
	alert(Math.sqrt(sqrRootNumber));
} else {
	alert('You did not insert a number or a valid math operator!');
}

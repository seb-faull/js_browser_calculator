var a = 'Addition';
var s = 'Subtraction';
var d = 'Division';
var m = 'Multiplication';
var p = 'To the Power of';

var calculator = prompt('Welcome to the Calulator. Let me just take some input from you. \nPlease choose from the following: \n' + a + ' - a \n' + s + ' - s \n' + d + ' - d \n' + m + ' - m \n' + p + ' - p');
var firstNumber = prompt('First number, please');
var secondNumber = prompt ('Second number, please');



// var calculator = true;

if (calculator === "a") {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber + secondNumber);
} else if (calculator === "s") {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber - secondNumber);
} else if (calculator === "d") {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber / secondNumber);
} else if (calculator === "m") {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber * secondNumber);
} else if (calculator === "p") {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);
	alert(firstNumber ** secondNumber);
} else {
	alert('You did not insert a number or a valid math operator!');
}

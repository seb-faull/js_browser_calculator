var a = 'Addition';
var s = 'Subtraction';
var d = 'Division';
var m = "Multiplication";
var firstNumber = 'first number';
var secondNumber = 'second number';
var calculator = true;

if (calculator === true) {
	prompt('Welcome to the Calulator. Let me just take some input from you. \nPlease choose the following: \n' + a + ' - a \n' + s + ' - s \n' + d + ' - d \n' + m + ' - m');
} else {
	alert('Calulator out of order.')
}

if (a !== true) {
	prompt('Please enter your ' + firstNumber);
	
} else {
	alert('You did not enter your first number.');
}

if (a !== true) {
	prompt('Please enter your ' + secondNumber);
	
} else {
	alert('You did not enter your second number.');
}

firstNumber = parseFloat(firstNumber);
alert(firstNumber + secondNumber);







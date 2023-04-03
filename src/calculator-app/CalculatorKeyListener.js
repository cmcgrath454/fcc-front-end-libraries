function handleKeyPress(event) {
	switch (event.key) {
		case 'Enter':
		case 'Return':
		case '=':
			document.getElementById('equals').click();
			break;
		case 'Escape':
			document.getElementById('clear').click();
			break;
		case '+':
			document.getElementById('add').click();
			break;
		case '-':
			document.getElementById('subtract').click();
			break;
		case '*':
			document.getElementById('multiply').click();
			break;
		case '/':
			document.getElementById('divide').click();
			break;
		case '.':
			document.getElementById('decimal').click();
			break;
		case '1':
			document.getElementById('one').click();
			break;
		case '2':
			document.getElementById('two').click();
			break;
		case '3':
			document.getElementById('three').click();
			break;
		case '4':
			document.getElementById('four').click();
			break;
		case '5':
			document.getElementById('five').click();
			break;
		case '6':
			document.getElementById('six').click();
			break;
		case '7':
			document.getElementById('seven').click();
			break;
		case '8':
			document.getElementById('eight').click();
			break;
		case '9':
			document.getElementById('nine').click();
			break;
		case '0':
			document.getElementById('zero').click();
			break;
		default:
			break;
	}
}

const calculatorListener = () => {
	window.addEventListener('keydown', handleKeyPress);
};

const removeCalculatorListener = () => {
	window.removeEventListener('keydown', handleKeyPress);
};

export { calculatorListener, removeCalculatorListener };

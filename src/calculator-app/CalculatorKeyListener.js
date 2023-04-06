function handleKeyPress(event) {
	switch (event.key) {
		case 'Enter':
		case 'Return':
		case '=':
			clickCalculatorButton(document.getElementById('equals'));
			break;
		case 'Escape':
			clickCalculatorButton(document.getElementById('clear'));
			break;
		case '+':
			clickCalculatorButton(document.getElementById('add'));
			break;
		case '-':
			clickCalculatorButton(document.getElementById('subtract'));
			break;
		case '*':
			clickCalculatorButton(document.getElementById('multiply'));
			break;
		case '/':
			clickCalculatorButton(document.getElementById('divide'));
			break;
		case '.':
			clickCalculatorButton(document.getElementById('decimal'));
			break;
		case '1':
			clickCalculatorButton(document.getElementById('one'));
			break;
		case '2':
			clickCalculatorButton(document.getElementById('two'));
			break;
		case '3':
			clickCalculatorButton(document.getElementById('three'));
			break;
		case '4':
			clickCalculatorButton(document.getElementById('four'));
			break;
		case '5':
			clickCalculatorButton(document.getElementById('five'));
			break;
		case '6':
			clickCalculatorButton(document.getElementById('six'));
			break;
		case '7':
			clickCalculatorButton(document.getElementById('seven'));
			break;
		case '8':
			clickCalculatorButton(document.getElementById('eight'));
			break;
		case '9':
			clickCalculatorButton(document.getElementById('nine'));
			break;
		case '0':
			clickCalculatorButton(document.getElementById('zero'));
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

const clickCalculatorButton = (button) => {
	button.click();
	button.classList.add('clicked');
	setTimeout(() => {
		button.classList.remove('clicked');
	}, 100);
};

export { calculatorListener, removeCalculatorListener };

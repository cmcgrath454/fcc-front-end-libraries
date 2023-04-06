import { useState, useEffect } from 'react';
import { Parser } from 'expr-eval';
import { calculatorListener, removeCalculatorListener } from './CalculatorKeyListener';
import Navbar from '../Navbar';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import { colors } from '../App';

const numbers = [
	{ numeral: '9', text: 'nine' },
	{ numeral: '8', text: 'eight' },
	{ numeral: '7', text: 'seven' },
	{ numeral: '6', text: 'six' },
	{ numeral: '5', text: 'five' },
	{ numeral: '4', text: 'four' },
	{ numeral: '3', text: 'three' },
	{ numeral: '2', text: 'two' },
	{ numeral: '1', text: 'one' },
	{ numeral: '0', text: 'zero' },
];

const operators = [
	{ symbol: '/', text: 'divide' },
	{ symbol: '*', text: 'multiply' },
	{ symbol: '-', text: 'subtract' },
	{ symbol: '+', text: 'add' },
];

const inputStates = {
	INTEGER: 'INTEGER',
	DECIMAL: 'DECIMAL',
	SIGN: 'SIGN',
	OPERATOR: 'OPERATOR',
	EVALUATED: 'EVALUATED',
	ERROR: 'ERROR',
};

function Calculator(props) {
	const [mainDisplay, setMainDisplay] = useState('0');
	const [subDisplay, setSubDisplay] = useState('0');
	const [inputState, setInputState] = useState(inputStates.INTEGER);
	const [accentColor, setAccentColor] = useState(colors[0]);

	useEffect(() => {
		calculatorListener();
		return () => removeCalculatorListener();
	}, []);

	function handleNumber(event) {
		const input = event.target.value;

		if (input === '0' && mainDisplay === '0') return;

		switch (inputState) {
			case inputStates.INTEGER:
			case inputStates.SIGN:
			case inputStates.DECIMAL:
				if (subDisplay === '0') {
					setMainDisplay(input);
					setSubDisplay(input);
				} else {
					setMainDisplay((prev) => prev + input);
					setSubDisplay((prev) => prev + input);
				}
				if (inputState === inputStates.SIGN) setInputState(inputStates.INTEGER);
				break;
			case inputStates.OPERATOR:
				setInputState(inputStates.INTEGER);
				setMainDisplay(input);
				setSubDisplay((prev) => prev + input);
				break;
			case inputStates.EVALUATED:
				setMainDisplay(input);
				setSubDisplay(input);
				setInputState(inputStates.INTEGER);
				break;
			default:
				console.error('Unknown input state: ' + inputState);
				break;
		}
	}

	function handleOperator(event) {
		const input = event.target.value;

		if (subDisplay === '0') {
			setMainDisplay(input);
			setSubDisplay('0' + input);
			setInputState(inputStates.OPERATOR);
			return;
		}

		switch (inputState) {
			case inputStates.SIGN:
				if (input === '-') break;
				setInputState(inputStates.OPERATOR);
				setMainDisplay(input);
				setSubDisplay((prev) => prev.substring(0, prev.length - 2) + input);
				break;
			case inputStates.INTEGER:
			case inputStates.DECIMAL:
				setInputState(inputStates.OPERATOR);
				setMainDisplay(input);
				setSubDisplay((prev) => prev + input);
				break;
			case inputStates.OPERATOR:
				if (input === '-') {
					setInputState(inputStates.SIGN);
					setMainDisplay(input);
					setSubDisplay((prev) => prev + input);
				}
				setMainDisplay(input);
				setSubDisplay((prev) => prev.substring(0, prev.length - 1) + input);
				break;
			case inputStates.EVALUATED:
				setInputState(inputStates.OPERATOR);
				setSubDisplay(mainDisplay + input);
				setMainDisplay(input);
				break;
			default:
				console.error('Unknown input state: ' + inputState);
		}
	}

	function handleDecimal() {
		switch (inputState) {
			case inputStates.DECIMAL:
				return;
			case inputStates.INTEGER:
				setMainDisplay((prev) => prev + '.');
				setSubDisplay((prev) => prev + '.');
				break;
			case inputStates.OPERATOR:
				setMainDisplay('0.');
				setSubDisplay((prev) => prev + '0.');
				break;
			case inputStates.EVALUATED:
				setMainDisplay('0.');
				setSubDisplay('0.');
				break;
			default:
				console.error('Unknown input state: ' + inputState);
		}
		setInputState(inputStates.DECIMAL);
	}

	function handleEquals() {
		try {
			const result = Parser.evaluate(subDisplay);
			setMainDisplay(result);
			setSubDisplay((prev) => prev + '=' + result);
		} catch {
			setMainDisplay('0');
			setSubDisplay('ERROR');
		}
		const newColor = props.getNextColor();
		setAccentColor(newColor);
		props.setBgColor(newColor);
		setInputState(inputStates.EVALUATED);
	}

	function handleClear() {
		setMainDisplay('0');
		setSubDisplay('0');
		setInputState(inputStates.INTEGER);
	}

	function increaseOpacity(rgbColor, opacity) {
		const newColor = rgbColor.replace('rgb', 'rgba');
		return newColor.replace(')', `, ${opacity})`);
	}

	const cssVariables = {
		'--accent-color': accentColor,
		'--accent-color-transparent': increaseOpacity(accentColor, 0.5),
	};

	return (
		<>
			<Navbar header='Calculator' color='#fff' />
			<div id='calculator' style={cssVariables}>
				<div id='sub-display' className='displays'>
					{subDisplay}
				</div>
				<div id='display' className='displays'>
					{mainDisplay}
				</div>
				<div id='button-grid'>
					<button id='clear' onClick={handleClear}>
						C
					</button>
					{operators.map((op) => (
						<OperatorButton key={op.text} operator={op.symbol} operatorLabel={op.text} handleClick={handleOperator} />
					))}
					{numbers.map((num) => (
						<NumberButton key={num.numeral} number={num.numeral} numberLabel={num.text} handleClick={handleNumber} />
					))}
					<button id='decimal' onClick={handleDecimal}>
						.
					</button>
					<button id='equals' onClick={handleEquals}>
						=
					</button>
				</div>
			</div>
		</>
	);
}

export default Calculator;

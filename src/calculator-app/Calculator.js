import { useState } from 'react';
import { Parser } from 'expr-eval';
import Navbar from "../Navbar";
import NumberButton from "./NumberButton"
import OperatorButton from "./OperatorButton"

const numbers = [
    { numeral: '1', text: 'one' },
    { numeral: '2', text: 'two' },
    { numeral: '3', text: 'three' },
    { numeral: '4', text: 'four' },
    { numeral: '5', text: 'five' },
    { numeral: '6', text: 'six' },
    { numeral: '7', text: 'seven' },
    { numeral: '8', text: 'eight' },
    { numeral: '9', text: 'nine' },
    { numeral: '0', text: 'zero' },
];

const operators = [
    { symbol: '+', text: 'plus' },
    { symbol: '-', text: 'minus' },
    { symbol: '*', text: 'multiply' },
    { symbol: '/', text: 'divide' }
]
function Calculator() {
    const [mainDisplay, setMainDisplay] = useState('0');
    const [subDisplay, setSubDisplay] = useState('0');
    const [evaluated, setEvaluated] = useState(false);

    function handleClick(event) {
        let value = event.target.value;

        if (value === '0' && subDisplay === '0' && mainDisplay === '0') return;
        if (isNaN(mainDisplay) && isNaN(value)) return;

        if (evaluated) {
            setSubDisplay(!isNaN(value) ? value : mainDisplay + value);
            setMainDisplay(value);
            setEvaluated(false);
        } else {
            setSubDisplay(prev => prev + value);
            setMainDisplay(prev => (!isNaN(value) && !isNaN(prev) && prev !== '0') ? prev + value : value);
        }
    };

    function handleDecimal() {
        if (evaluated) {
            setMainDisplay('0.');
            setSubDisplay('0.');
            setEvaluated(false);
        } else {
            if (mainDisplay.includes('.')) return;
            if (!isNaN(mainDisplay)) {
                setMainDisplay(prev => prev + '.');
                setSubDisplay(prev => prev === '' ? '0.' : prev + '.');
            } else {
                setMainDisplay('0.');
                setSubDisplay(prev => prev += '0.');
            }
        }
    }

    function handleEquals() {
        try {
            const result = Parser.evaluate(subDisplay);
            setMainDisplay(result);
            setSubDisplay(prev => prev + '=' + result);
            setEvaluated(true);
        } catch {
            setMainDisplay('0');
            setSubDisplay('ERROR');
            setEvaluated(true);
        }  
    };

    function handleClear() {
        setMainDisplay('0');
        setSubDisplay('');
        setEvaluated(false);
    };

    return (
        <>
            <Navbar header="Calculator" />
            <div id="sub-display">{subDisplay}</div>
            <div id="display">{mainDisplay}</div>
            <button id="equals" onClick={handleEquals}>=</button>
            <button id="clear" onClick={handleClear}>C</button>
            <button id="decimal" onClick={handleDecimal}>.</button>
            {operators.map(op => <OperatorButton key={op.text} operator={op.symbol} operatorLabel={op.text} handleClick={handleClick} />)}
            {numbers.map(num => <NumberButton key={num.numeral} number={num.numeral} numberLabel={num.text} handleClick={handleClick} />)}
        </>
    )
}

export default Calculator;
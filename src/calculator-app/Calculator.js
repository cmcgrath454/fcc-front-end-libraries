import { useState } from 'react';
import Navbar from "../Navbar";
import NumberButton from "./NumberButton"
import OperatorButton from "./OperatorButton"

const numbers = [
    { numeral: 1, text: 'one' },
    { numeral: 2, text: 'two' },
    { numeral: 3, text: 'three' },
    { numeral: 4, text: 'four' },
    { numeral: 5, text: 'five' },
    { numeral: 6, text: 'six' },
    { numeral: 7, text: 'seven' },
    { numeral: 8, text: 'eight' },
    { numeral: 9, text: 'nine' },
    { numeral: 0, text: 'zero' },
    { numeral: '.', text: 'decimal' },
];

const operators = [
    { symbol: '+', text: 'plus' },
    { symbol: '-', text: 'minus' },
    { symbol: '*', text: 'multiply' },
    { symbol: '/', text: 'divide' }
]

function Calculator() {
    const [mainDisplay, setMainDisplay] = useState(0);
    const [subDisplay, setSubDisplay] = useState('');

    function handleClick(event) {
        setMainDisplay(event.target.value);
    };


    return (
        <>
            <Navbar header="Calculator" />
            <div className="display">{mainDisplay}</div>
            <button id="equals">=</button>
            <button id="clear">C</button>
            {operators.map(op => <OperatorButton key={op.text} operator={op.symbol} operatorLabel={op.text} handleClick={handleClick}/>)}
            {numbers.map(num => <NumberButton key={num.numeral} number={num.numeral} numberLabel={num.text} handleClick={handleClick}/>)}

        </>

    )
}

export default Calculator;
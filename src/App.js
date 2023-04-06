import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.scss';
import QuoteApp from './quote-app/QuoteApp';
import Home from './Home';
import MarkdownApp from './markdown-app/MarkdownApp';
import CalculatorApp from './calculator-app/CalculatorApp';
import DrumApp from './drum-app/DrumApp';
import TimerApp from './timer-app/TimerApp';

export const colors = [
	'rgb(0, 35, 91)',
	'rgb(226, 24, 24)',
	'rgb(38, 70, 83)',
	'rgb(255, 221, 131)',
	'rgb(231, 111, 81)',
	'rgb(152, 223, 214)',
];

function App() {
	const [bgColor, setBgColor] = useState('pink');
	const [colorIndex, setColorIndex] = useState(1); //Set to 1 so we can use 0 as the initial state in children

	function getNextColor() {
		const color = colors[colorIndex];
		setColorIndex((index) => (index >= colors.length - 1 ? 0 : index + 1));
		return color;
	}

	return (
		<div id='app' style={{ backgroundColor: bgColor }}>
			<HashRouter basename='/'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/quote-machine' element={<QuoteApp setBgColor={setBgColor} getNextColor={getNextColor} />} />
					<Route path='/markdown' element={<MarkdownApp setBgColor={setBgColor} />} />
					<Route path='/calculator' element={<CalculatorApp setBgColor={setBgColor} getNextColor={getNextColor} />} />
					<Route path='/drum-pad' element={<DrumApp setBgColor={setBgColor} getNextColor={getNextColor} />} />
					<Route path='/focus-timer' element={<TimerApp setBgColor={setBgColor} />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;

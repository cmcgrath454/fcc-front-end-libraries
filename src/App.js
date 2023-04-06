import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.scss';
import QuoteApp from './quote-app/QuoteApp';
import Home from './Home';
import MarkdownApp from './markdown-app/MarkdownApp';
import CalculatorApp from './calculator-app/CalculatorApp';
import DrumApp from './drum-app/DrumApp';
import TimerApp from './timer-app/TimerApp';

function App() {
	const [bgColor, setBgColor] = useState('pink');
	const [colorIndex, setColorIndex] = useState(0);

	function getNextColor() {
		const colors = ['#00235B', '#E21818', '#264653', '#FFDD83', '#e76f51', '#98DFD6'];
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
					<Route path='/drum-pad' element={<DrumApp setBgColor={setBgColor} />} />
					<Route path='/focus-timer' element={<TimerApp setBgColor={setBgColor} />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;

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

	return (
		<div id='app' style={{ backgroundColor: bgColor }}>
			<HashRouter basename='/'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/quote-machine' element={<QuoteApp setBgColor={setBgColor} />} />
					<Route path='/markdown' element={<MarkdownApp setBgColor={setBgColor} />} />
					<Route path='/calculator' element={<CalculatorApp setBgColor={setBgColor} />} />
					<Route path='/drum-pad' element={<DrumApp setBgColor={setBgColor} />} />
					<Route path='/focus-timer' element={<TimerApp setBgColor={setBgColor} />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;

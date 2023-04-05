import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { timerReducer } from './reducer.js';
import Navbar from '../Navbar';
import SessionSettings from './SessionSettings.js';
import BreakSettings from './BreakSettings.js';
import Timer from './Timer';

function TimerApp() {
	const store = configureStore({ reducer: timerReducer });

	return (
		<>
			<Navbar header='Focus Timer' />
			<Provider store={store}>
				<div id='timer-app'>
					<SessionSettings />
					<BreakSettings />
					<Timer />
				</div>
			</Provider>
		</>
	);
}

export default TimerApp;

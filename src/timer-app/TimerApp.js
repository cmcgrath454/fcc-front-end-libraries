import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { timerReducer } from './reducer.js';
import Navbar from '../Navbar';
import SessionInfo from './SessionInfo';
import BreakInfo from './BreakInfo';
import Timer from './Timer';

function TimerApp() {
	const store = configureStore({ reducer: timerReducer });

	return (
		<>
			<Navbar header='Pomodoro Timer' />
			<Provider store={store}>
				<SessionInfo />
				<BreakInfo />
				<Timer />
			</Provider>
		</>
	);
}

export default TimerApp;

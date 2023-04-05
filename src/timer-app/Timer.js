import { useState } from 'react';
import { RESET, TICK } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function Timer() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const [intervalID, setIntervalID] = useState(null);

	function startStopTimer() {
		if (intervalID) {
			clearInterval(intervalID);
			setIntervalID(null);
		} else {
			setIntervalID(
				setInterval(() => {
					dispatch({ type: TICK });
				}, 1000)
			);
		}
	}

	const minutesLeft = String(Math.floor(state.secondsLeft / 60)).padStart(2, '0');
	const secondsLeft = String(state.secondsLeft % 60).padStart(2, '0');

	return (
		<>
			<h2 id='timer-label'>{(state.isBreak && 'Break') || 'Session'} Time</h2>
			<button id='start_stop' onClick={startStopTimer}>
				Play/Pause
			</button>
			<button
				id='reset'
				onClick={() => {
					if (intervalID) {
						clearInterval(intervalID);
						setIntervalID(null);
					}
					dispatch({ type: RESET });
				}}>
				Reset
			</button>
			<p id='time-left'>
				{minutesLeft}:{secondsLeft}
			</p>
			<audio id='beep' src={process.env.PUBLIC_URL + '/sounds/timer_done.wav'} />
		</>
	);
}

export default Timer;

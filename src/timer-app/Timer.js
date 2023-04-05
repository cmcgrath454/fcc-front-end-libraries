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
	const playPauseImg = intervalID ? 'pause.png' : 'play.png';

	return (
		<div id='timer'>
			<h2 id='timer-label'>{(state.isBreak && 'Break') || 'Session'} Time</h2>
			<p id='time-left'>
				{minutesLeft}:{secondsLeft}
			</p>
			<button id='start_stop' onClick={startStopTimer}>
				<img src={process.env.PUBLIC_URL + '/images/' + playPauseImg} alt='play' />
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
				<img src={process.env.PUBLIC_URL + '/images/reset.png'} alt='reset' />
			</button>

			<audio id='beep' src={process.env.PUBLIC_URL + '/sounds/timer_done.wav'} />
		</div>
	);
}

export default Timer;

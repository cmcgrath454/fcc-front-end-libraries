import { useState } from 'react';
import { RESET, TICK } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import resetBtn from '../assets/icons/reset.png';
import playBtn from '../assets/icons/play.png';
import pauseBtn from '../assets/icons/pause.png';
import timerSound from '../assets/sounds/timer_done.wav';

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
	const playPauseBtn = intervalID ? pauseBtn : playBtn;

	return (
		<div id='timer'>
			<h2 id='timer-label'>{(state.isBreak && 'Break') || 'Session'} Time</h2>
			<p id='time-left'>
				{minutesLeft}:{secondsLeft}
			</p>
			<button id='start_stop' onClick={startStopTimer}>
				<img src={playPauseBtn} alt='play' />
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
				<img src={resetBtn} alt='reset' />
			</button>

			<audio id='beep' src={timerSound} />
		</div>
	);
}

export default Timer;

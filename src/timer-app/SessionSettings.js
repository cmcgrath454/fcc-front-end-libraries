import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT_SESSION, INCREMENT_SESSION } from './actions';
import downArrow from '../assets/icons/down-arrow.png';
import upArrow from '../assets/icons/up-arrow.png';

function SessionInfo() {
	const sessionLength = useSelector((state) => state.sessionLength);
	const dispatch = useDispatch();

	return (
		<div id='session-settings'>
			<div className='controls'>
				<button id='session-decrement' onClick={() => dispatch({ type: DECREMENT_SESSION })}>
					<img src={downArrow} alt='down arrow' />
				</button>
				<p id='session-length'>{sessionLength}</p>
				<button id='session-increment' onClick={() => dispatch({ type: INCREMENT_SESSION })}>
					<img src={upArrow} alt='up arrow' />
				</button>
			</div>
			<h2 id='session-label'>Session Time</h2>
		</div>
	);
}

export default SessionInfo;

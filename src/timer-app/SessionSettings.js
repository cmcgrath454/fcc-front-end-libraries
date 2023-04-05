import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT_SESSION, INCREMENT_SESSION } from './actions';

function SessionInfo() {
	const sessionLength = useSelector((state) => state.sessionLength);
	const dispatch = useDispatch();

	return (
		<div id='session-settings'>
			<h2 id='session-label'>Session Time</h2>
			<div className='settings'>
				<button id='session-decrement' onClick={() => dispatch({ type: DECREMENT_SESSION })}>
					<img src={process.env.PUBLIC_URL + '/images/down-arrow.png'} alt='down arrow' />
				</button>
				<p id='session-length'>{sessionLength}</p>
				<button id='session-increment' onClick={() => dispatch({ type: INCREMENT_SESSION })}>
					<img src={process.env.PUBLIC_URL + '/images/up-arrow.png'} alt='up arrow' />
				</button>
			</div>
		</div>
	);
}

export default SessionInfo;

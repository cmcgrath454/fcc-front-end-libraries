import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT_SESSION, INCREMENT_SESSION } from './actions';

function SessionInfo() {
	const sessionLength = useSelector((state) => state.sessionLength);
	const dispatch = useDispatch();

	return (
		<>
			<h2 id='session-label'>Session Length</h2>
			<p id='session-length'>{sessionLength}</p>
			<button id='session-decrement' onClick={() => dispatch({ type: DECREMENT_SESSION })}>
				V
			</button>
			<button id='session-increment' onClick={() => dispatch({ type: INCREMENT_SESSION })}>
				^
			</button>
		</>
	);
}

export default SessionInfo;

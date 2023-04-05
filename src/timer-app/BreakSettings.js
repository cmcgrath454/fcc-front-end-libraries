import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_BREAK, DECREMENT_BREAK } from './actions.js';

function BreakInfo() {
	const breakLength = useSelector((state) => state.breakLength);
	const dispatch = useDispatch();

	return (
		<>
			<h2 id='break-label'>Break Length</h2>
			<p id='break-length'>{breakLength}</p>
			<button id='break-decrement' onClick={() => dispatch({ type: DECREMENT_BREAK })}>
				V
			</button>
			<button id='break-increment' onClick={() => dispatch({ type: INCREMENT_BREAK })}>
				^
			</button>
		</>
	);
}

export default BreakInfo;

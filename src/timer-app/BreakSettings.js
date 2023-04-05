import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_BREAK, DECREMENT_BREAK } from './actions.js';

function BreakInfo() {
	const breakLength = useSelector((state) => state.breakLength);
	const dispatch = useDispatch();

	return (
		<div id='break-settings'>
			<h2 id='break-label'>Break Time</h2>
			<div className='settings'>
				<button id='break-decrement' onClick={() => dispatch({ type: DECREMENT_BREAK })}>
					<img src={process.env.PUBLIC_URL + '/images/down-arrow.png'} alt='down arrow' />
				</button>
				<p id='break-length'>{breakLength}</p>
				<button id='break-increment' onClick={() => dispatch({ type: INCREMENT_BREAK })}>
					<img src={process.env.PUBLIC_URL + '/images/up-arrow.png'} alt='up arrow' />
				</button>
			</div>
		</div>
	);
}

export default BreakInfo;

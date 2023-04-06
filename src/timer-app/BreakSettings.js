import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_BREAK, DECREMENT_BREAK } from './actions.js';
import downArrow from '../assets/icons/down-arrow.png';
import upArrow from '../assets/icons/up-arrow.png';

function BreakInfo() {
	const breakLength = useSelector((state) => state.breakLength);
	const dispatch = useDispatch();

	return (
		<div id='break-settings'>
			<div className='controls'>
				<button id='break-decrement' onClick={() => dispatch({ type: DECREMENT_BREAK })}>
					<img src={downArrow} alt='down arrow' />
				</button>
				<p id='break-length'>{breakLength}</p>
				<button id='break-increment' onClick={() => dispatch({ type: INCREMENT_BREAK })}>
					<img src={upArrow} alt='up arrow' />
				</button>
			</div>
			<h2 id='break-label'>Break Time</h2>
		</div>
	);
}

export default BreakInfo;

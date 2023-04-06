import Navbar from '../Navbar';
import QuoteBox from './QuoteBox';

function QuoteApp(props) {
	return (
		<>
			<Navbar header='Quote Machine' color='#fff' />
			<QuoteBox setBgColor={props.setBgColor} getNextColor={props.getNextColor} />
		</>
	);
}

export default QuoteApp;

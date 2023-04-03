import './styles/App.scss';
import Navbar from './Navbar';

function App() {
	return (
		<>
			<Navbar header='React Apps' />
			<a href={process.env.PUBLIC_URL + '/#/quote-machine'}>Quote Machine</a>
			<a href={process.env.PUBLIC_URL + '/#/markdown-editor'}>Markdown Editor</a>
			<a href={process.env.PUBLIC_URL + '/#/drums'}>Drum Kit</a>
			<a href={process.env.PUBLIC_URL + '/#/calculator'}>Calculator</a>
			<a href={process.env.PUBLIC_URL + '/#/timer'}>Timer</a>
		</>
	);
}

export default App;

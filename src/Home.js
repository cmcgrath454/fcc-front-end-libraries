function Home() {
	return (
		<div>
			<h1>Home</h1>
			<a href={process.env.PUBLIC_URL + '/#/quote-machine'}>Quote Machine</a>
			<a href={process.env.PUBLIC_URL + '/#/markdown'}>Markdown Editor</a>
			<a href={process.env.PUBLIC_URL + '/#/calculator'}>Calculator</a>
			<a href={process.env.PUBLIC_URL + '/#/drum-pad'}>Drum Pad</a>
			<a href={process.env.PUBLIC_URL + '/#/focus-timer'}>Focus TImer</a>
		</div>
	);
}

export default Home;

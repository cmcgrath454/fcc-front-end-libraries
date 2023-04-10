function Home() {
	return (
		<div id='home'>
			<h1>Front End Libraries Certification Projects</h1>
			<p>
				I made the projects below as part of FreeCodeCamp's Front-End Library Certification. The certification process included
				courses on Bootstrap, jQuery, React, Redux, and React-Redux. After the courses were completed, the final step to
				certification was creating these 5 projects. I've also included a page with a summary of some challenges I faced and
				important things I learned.
			</p>
			<nav>
				<a href={process.env.PUBLIC_URL + '/#/quote-machine'} id='quote-link'>
					<span>Quote Machine</span>
				</a>
				<a href={process.env.PUBLIC_URL + '/#/markdown'} id='markdown-link'>
					<span>Markdown</span>
				</a>
				<a href={process.env.PUBLIC_URL + '/#/calculator'} id='calculator-link'>
					<span>Calculator</span>
				</a>
				<a href={process.env.PUBLIC_URL + '/#/drum-pad'} id='drum-link'>
					<span>Drum Pad</span>
				</a>
				<a href={process.env.PUBLIC_URL + '/#/focus-timer'} id='timer-link'>
					<span>Focus Timer</span>
				</a>
				<a href={process.env.PUBLIC_URL + '/#/reflection'} id='reflection-link'>
					<span>Reflection</span>
				</a>
			</nav>
		</div>
	);
}

export default Home;

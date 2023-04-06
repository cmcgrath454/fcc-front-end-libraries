import { useState, useEffect } from 'react';
import { TwitterSVG, QuoteSVG } from './QuoteSVGs';

function QuoteBox(props) {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');
	const [accentColor, setAccentColor] = useState('white');

	function newQuote() {
		const newColor = props.getNextColor();
		setAccentColor(newColor);
		props.setBgColor(newColor);
		fetch('https://api.quotable.io/random?maxLength=80')
			.then((response) => response.json())
			.then((data) => {
				setQuote(data.content);
				setAuthor(data.author);
			})
			.catch((error) => console.error(error));
	}

	useEffect(() => {
		document.getElementById('new-quote').click();
	}, []);

	return (
		<section id='quote-box' style={{ color: accentColor }}>
			<blockquote id='text'>
				<QuoteSVG color={accentColor} />
				{quote}
			</blockquote>
			<cite id='author'>{author}</cite>
			<div className='d-flex justify-content-between'>
				<a
					href={'https://twitter.com/intent/tweet?text=' + quote + ' -' + author}
					id='tweet-quote'
					target='_blank'
					rel='noreferrer'>
					<TwitterSVG color={accentColor} />
				</a>
				<button id='new-quote' onClick={newQuote} className='btn' style={{ backgroundColor: accentColor }}>
					New Quote
				</button>
			</div>
		</section>
	);
}

export default QuoteBox;

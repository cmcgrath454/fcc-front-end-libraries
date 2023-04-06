import { useState, useEffect } from 'react';
import { TwitterSVG, QuoteSVG } from './QuoteSVGs';

const colors = ['#00235B', '#E21818', '#264653', '#FFDD83', '#e76f51', '#98DFD6'];

function QuoteBox(props) {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');
	const [colorIndex, setColorIndex] = useState(0);

	const accentColor = colors[colorIndex];
	props.setBgColor(accentColor);

	const newQuote = () => {
		fetch('https://api.quotable.io/random?maxLength=80')
			.then((response) => response.json())
			.then((data) => {
				setColorIndex((prevIndex) => (prevIndex < colors.length - 1 ? prevIndex + 1 : 0));
				setQuote(data.content);
				setAuthor(data.author);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		newQuote();
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

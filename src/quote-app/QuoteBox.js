import { useState } from 'react';

function QuoteBox() {
    const [quote, setQuote] = useState('Quote goes here');
    const [author, setAuthor] = useState('Author goes here');

    const newQuote = () => {
        setQuote('New quote goes here');
        setAuthor('New author goes here');
    }

    return (
        <section id='quote-box'>
            <blockquote id='text'>{quote}</blockquote>
            <cite id='author'>{author}</cite>
            <button id='new-quote' onClick={newQuote} className='btn btn-primary'>New</button>
            <a href={'https://twitter.com/intent/tweet?text=' + quote + ' -' + author}
                id='tweet-quote'
                className='btn btn-primary'
                target='_blank'>
                Tweet
            </a>
        </section>
    )
}

export default QuoteBox;
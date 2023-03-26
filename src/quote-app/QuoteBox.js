import { useState, useEffect } from 'react';

function QuoteBox() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const newQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            setQuote(data.content);
            setAuthor(data.author);
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        newQuote();
    }, []);

    return (
        <section id='quote-box'>
            <blockquote id='text'>{quote}</blockquote>
            <cite id='author'>{author}</cite>
            <button id='new-quote' onClick={newQuote} className='btn btn-primary'>New</button>
            <a href={'https://twitter.com/intent/tweet?text=' + quote + ' -' + author}
                id='tweet-quote'
                className='btn btn-primary'
                target='_blank'
                without rel="noreferrer">
                Tweet
            </a>
        </section>
    )
}

export default QuoteBox;
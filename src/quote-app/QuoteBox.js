import { useState, useEffect } from 'react';

const colors = ['#00235B', '#E21818', '#264653', '#FFDD83', '#e76f51', '#98DFD6'];

function QuoteBox() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [colorIndex, setColorIndex] = useState(0);

    const newQuote = () => {
        fetch('https://api.quotable.io/random?maxLength=80')
            .then(response => response.json())
            .then(data => {
                setColorIndex(prevIndex => prevIndex < colors.length - 1 ? prevIndex + 1 : 0);
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        newQuote();
    }, []);

    const bgColor = colors[colorIndex];

    return (
        <section id='quote-box' style={{ backgroundColor: bgColor }}>
            <blockquote id='text'>
                <img src={process.env.PUBLIC_URL + '/images/quote.png'} alt="quote" />
                {quote}
            </blockquote>
            <cite id='author'>{author}</cite>
            <div className='d-flex justify-content-between'>
                <a href={'https://twitter.com/intent/tweet?text=' + quote + ' -' + author}
                    id='tweet-quote'
                    target='_blank'
                    rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="twitter post button" />
                </a>
                <button id='new-quote' onClick={newQuote} className="btn" style={{color: bgColor}}>New Quote</button>
            </div>
        </section>
    )
}

export default QuoteBox;
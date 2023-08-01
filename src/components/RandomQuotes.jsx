import { useState } from 'react';
import Button from './Button';

export default function RandomQuotes (){
    const [quote] = useState([
        '"The best way to predict the future is to create it." - Peter Drucker',
        '"Technology is best when it brings people together." - Matt Mullenweg',
        '"Technology is anything that wasn’t around when you were born." - Alan Kay',
        '"Technology is the campfire around which we tell our stories." - Laurie Anderson']);

    const [quotes, setQuotes] = useState('"The computer was born to solve problems that did not exist before." - Bill Gates');

    const randomQuote = () => {
        const random = quote[Math.floor(Math.random() * quote.length)]
        setQuotes(random)
    }

    return(
        <>
            <p className='quoteText'>{quotes}</p>
            <Button randomQuote ={randomQuote}/>
        </>
    );
}
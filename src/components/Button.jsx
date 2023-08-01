export default function Button (props){
    return(
        <button onClick={props.randomQuote} className="generateButton">Generate Random Quote</button>
    );
}
import Navbar from "../Navbar";
import QuoteBox from "./QuoteBox";
import '../styles/QuoteApp.scss';

function QuoteApp() {
    return (
        <>
        <Navbar header='Quote Machine' />
        <QuoteBox />
        </>
    )
}

export default QuoteApp;
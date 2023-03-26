function Navbar(props) {
    return (
        <nav>
            {props.header !== 'React Apps' && <a href={'/'}>Back</a>}
            <h1>{props.header}</h1>
        </nav>
    )
}

export default Navbar;
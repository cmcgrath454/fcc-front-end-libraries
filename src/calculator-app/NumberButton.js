function NumberButton(props) {
	return (
		<button id={props.numberLabel} onClick={(event) => props.handleClick(event)} value={props.number}>
			{props.number}
		</button>
	);
}

export default NumberButton;

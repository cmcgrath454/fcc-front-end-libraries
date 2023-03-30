function OperatorButton(props) {
    return(
        <button id={props.operatorLabel} onClick={(event) => props.handleClick(event)} value={props.operator}>
            {props.operator}
        </button>
    )
}

export default OperatorButton;
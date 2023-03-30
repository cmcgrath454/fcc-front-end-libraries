function DrumButton(props) {
    function playSound(event) {
        new Audio(props.audioSource).play();
    }

    return (
        <button onClick={(event) => playSound(event)} id={props.keyLetter + '-sound-btn'}>
            {props.keyLetter}
        </button>
    );
}

export default DrumButton;
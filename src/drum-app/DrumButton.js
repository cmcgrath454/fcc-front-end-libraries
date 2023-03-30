function DrumButton(props) {
    function playSound(event) {
        event.preventDefault();
        event.target.classList.add('clicked');
        setTimeout(() => {
            event.target.classList.remove('clicked');
        }, 500)
        event.target.children[0].currentTime = 0;
        event.target.children[0].play();
        props.setSoundPlayed(props.sound.name);
    }

    return (
        <button onClick={(event) => playSound(event)} id={props.sound.key + '-sound-btn'} className='drum-pad'>
            <audio src={props.sound.source} id={props.sound.key} className='clip'></audio>
            <span className="text">{props.sound.key}</span>
        </button>
    );
}

export default DrumButton;
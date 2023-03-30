import { useEffect } from "react";
import Navbar from "../Navbar";
import DrumButton from "./DrumButton";

const sounds = [
    { key: 'Q', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { key: 'W', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { key: 'E', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { key: 'A', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { key: 'S', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { key: 'D', source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { key: 'Z', source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { key: 'X', source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { key: 'C', source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

function DrumApp() {
    function getAndPlaySound(event) {
        document.getElementById(event.key.toUpperCase() + '-sound-btn')?.click();
    }

    useEffect(() => {
        window.addEventListener('keydown', getAndPlaySound);
        return () => {
            window.removeEventListener('keydown', getAndPlaySound);
        }
    }, []);


    return (
        <>
            <Navbar header="Drum Kit" />
            <div>
                {sounds.map(sound => <DrumButton key={sound.key} keyLetter={sound.key} audioSource={sound.source} />)}
            </div>
        </>

    )
}

export default DrumApp;
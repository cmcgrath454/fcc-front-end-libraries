import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import DrumButton from './DrumButton';

const sounds = [
	{ key: 'Q', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', name: 'Heater 1' },
	{ key: 'W', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', name: 'Heater 2' },
	{ key: 'E', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', name: 'Heater 3' },
	{ key: 'A', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', name: 'Heater 4' },
	{ key: 'S', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', name: 'Clap' },
	{ key: 'D', source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', name: 'Open HH' },
	{ key: 'Z', source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', name: 'Kick & Hat' },
	{ key: 'X', source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', name: 'Kick' },
	{ key: 'C', source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', name: 'Closed HH' },
];

function DrumApp() {
	const [soundPlayed, setSoundPlayed] = useState('');

	function getAndPlaySound(event) {
		const btn = document.getElementById(event.key.toUpperCase() + '-sound-btn');
		btn?.focus();
		btn?.click();
		btn?.blur();
	}

	useEffect(() => {
		window.addEventListener('keydown', getAndPlaySound);
		return () => {
			window.removeEventListener('keydown', getAndPlaySound);
		};
	}, []);

	return (
		<>
			<Navbar header='Drum Kit' />
			<div id='drum-machine'>
				<div id='display'>{soundPlayed}</div>
				<div id='drum-pad'>
					{sounds.map((sound) => (
						<DrumButton key={sound.key} sound={sound} setSoundPlayed={setSoundPlayed} />
					))}
				</div>
			</div>
		</>
	);
}

export default DrumApp;

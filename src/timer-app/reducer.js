import * as actions from './actions';

const defaultSession = 25;
const defaultBreak = 5;

const defaultState = {
	breakLength: defaultBreak,
	sessionLength: defaultSession,
	isBreak: false,
	secondsLeft: defaultSession * 60,
	isTicking: false,
};

export const timerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.INCREMENT_BREAK:
			if (state.breakLength >= 60) return state;
			return { ...state, breakLength: state.breakLength + 1 };
		case actions.DECREMENT_BREAK:
			if (state.breakLength <= 1) return state;
			return { ...state, breakLength: state.breakLength - 1 };
		case actions.INCREMENT_SESSION:
			if (state.sessionLength >= 60) return state;
			return { ...state, sessionLength: state.sessionLength + 1, secondsLeft: (state.sessionLength + 1) * 60 };
		case actions.DECREMENT_SESSION:
			if (state.sessionLength <= 1) return state;
			return { ...state, sessionLength: state.sessionLength - 1, secondsLeft: (state.sessionLength - 1) * 60 };
		case actions.START_STOP:
			return { ...state, isTicking: !state.isTicking };
		case actions.TICK:
			if (state.secondsLeft <= 0) {
				document.querySelector('#beep').play();
				return {
					...state,
					isBreak: !state.isBreak,
					secondsLeft: state.isBreak ? state.sessionLength * 60 : state.breakLength * 60,
				};
			}
			return { ...state, secondsLeft: state.secondsLeft - 1 };
		case actions.RESET:
			const htmlAudio = document.querySelector('#beep');
			htmlAudio.pause();
			htmlAudio.currentTime = 0;
			return defaultState;
		default:
			return state;
	}
};

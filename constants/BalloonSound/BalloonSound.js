import { Audio } from 'expo-av';

const playBalloonPop = async () => {
	const soundObject = new Audio.Sound();
	try {
		await soundObject.loadAsync(require('../../assets/Pop.m4a'));
		await soundObject.playAsync();
	} catch (error) {
		console.log('oops, no sound');
	}
};

export default playBalloonPop;

import React from 'react';
import CorrectLetter from '../../constants/CorrectLetter/CorrectLetter';
import LoaderHOC from '../../hoc/Loader';

const CorrectLetterScreen = props => {
	const chosenWordArray = props.chosenWord.split('');
	return chosenWordArray.map(letter => {
		const visibility = props.guesses.includes(letter);
		return <CorrectLetter visible={visibility} letter={letter} />;
	});
};

export default LoaderHOC(CorrectLetterScreen);

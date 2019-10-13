import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../constants/Button/Button';

export default function GameBoard() {
	return (
		<View style={styles.container}>
			<Text accessibilityLabel="Word guessing game called Hangman">Hangman</Text>
			{/* score human
			score computer */}
			{/* balloons with wrong guessed letter in them
			<Image source={require('../../assets/hangman.jpeg')} style={styles.logo} /> image of man with balloons and each one goes away with wrong guess
			- - - - - - with letters filled in
			<Input>A</Input> */}
			<Button accessibilityLabel="Tap me to submit your letter guess">Take a Guess</Button>
		</View>
	);
}

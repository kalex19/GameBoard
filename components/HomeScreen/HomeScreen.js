import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../constants/Button/Button';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text accessibilityLabel="Word guessing game called Hangman">Hangman</Text>
			<Image source={require('../../assets/hangman.js')} style={styles.logo} />
			<Button accessibilityLabel="Tap me to play a new game"
				onPress={() => props.navigation.navigate('GameBoard')}>Ready to Play?</Button>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

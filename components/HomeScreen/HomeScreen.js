import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../constants/Button/Button';
import { styles } from './styles';
import theme from '../../constants/theme';

export default function HomeScreen() {
	return (
		<View style={theme.container}>
			<Text accessibilityLabel="Word guessing game called Hangman" style={styles.text}>Hangman</Text>
			<Image source={require('../../assets/hangman.jpeg')} style={styles.logo} />
			<Button accessibilityLabel="Tap me to play a new game" onPress={() => props.navigation.navigate('GameBoard')}>
				Ready to Play?
			</Button>
		</View>
	);
}

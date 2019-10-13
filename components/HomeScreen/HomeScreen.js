import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Button from '../../constants/Button/Button';
import { styles } from './styles';
import theme from '../../constants/theme';
import Header from '../../constants/Header/Header';

export default function HomeScreen() {
	return (
		<ImageBackground source={require('../../assets/officeGames.png')} style={styles.backgroundImage}>
			<View
				style={theme.container}
			>
				<Header accessibilityLabel="Word guessing game called Hangman">
					HANGMAN
				</Header>
			</View>
			<Button accessibilityLabel="Tap me to play a new game" onPress={() => props.navigation.navigate('GameBoard')}>
				Ready to Play?
			</Button>
		</ImageBackground>
	);
}

import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Button from '../../constants/Button/Button';
import { styles } from './styles';
import theme from '../../constants/theme';

export default function HomeScreen() {
	return (
		<ImageBackground source={require('../../assets/officeGames.png')} style={styles.backgroundImage}>
			<View
				style={{
					...theme.container,
					borderBottomColor: 'maroon',
					borderBottomWidth: StyleSheet.hairlineWidth
				}}
			>
				<Text accessibilityLabel="Word guessing game called Hangman" style={styles.header}>
					HANGMAN
				</Text>
			</View>
			<Button accessibilityLabel="Tap me to play a new game" onPress={() => props.navigation.navigate('GameBoard')}>
				Ready to Play?
			</Button>
		</ImageBackground>
	);
}

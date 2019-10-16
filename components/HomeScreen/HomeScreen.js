import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Button from '../../constants/Button/Button';
import { styles } from './styles';
import theme from '../../constants/theme';
import Header from '../../constants/Header/Header';
import { Audio } from 'expo-av';
import { withNavigation } from 'react-navigation';

class HomeScreen extends Component {
	navigateToGame = async () => {
		await this.playBalloonPop();
	 this.props.navigation.navigate('Game');
	};

	playBalloonPop = async () => {
		const soundObject = new Audio.Sound();

		try {
			await soundObject.loadAsync(require('../../assets/Pop.m4a'));
			await soundObject.playAsync();
		} catch (error) {
			console.log('oops');
		}
	};

	render() {
		return (
			<ImageBackground source={require('../../assets/officeGames.png')} style={styles.backgroundImage}>
				<View style={theme.container}>
					<Header accessibilityLabel="Word guessing game called WordPop">WORDP🎈P</Header>
					<Button accessibilityLabel="Tap me to play a new game" onPress={this.navigateToGame}>
						Ready to Play?
					</Button>
				</View>
			</ImageBackground>
		);
	}
}

export default withNavigation(HomeScreen);

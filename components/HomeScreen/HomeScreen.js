import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Button from '../../constants/Button/Button';
import Header from '../../constants/Header/Header';
import { withNavigation } from 'react-navigation';
import playBalloonPop from '../../constants/BalloonSound/BalloonSound';

class HomeScreen extends Component {
	navigateToGame = async () => {
		await playBalloonPop();
		this.props.navigation.navigate('Game');
	};

	render() {
		return (
			<ImageBackground source={require('../../assets/officeGames.png')} style={{ height: '100%', width: '100%' }}>
				<View
					style={{
						backgroundColor: 'rgba(0,0,0,.4)'
					}}
				>
					<Header accessibilityLabel="Welcome to a word guessing game called WordPop">WORDP🎈P</Header>
					<Button accessibilityLabel="Tap me to play a new game" onPress={this.navigateToGame}>
						Ready to Play?
					</Button>
				</View>
			</ImageBackground>
		);
	}
}

export default withNavigation(HomeScreen);

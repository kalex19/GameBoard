import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Button from '../../constants/Button/Button';
import { styles } from './styles';
import theme from '../../constants/theme';
import Header from '../../constants/Header/Header';

class HomeScreen extends Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/officeGames.png')} style={styles.backgroundImage}>
				<View style={theme.container}>
					<Header accessibilityLabel="Word guessing game called Balloons">BALLOONS</Header>
				</View>
				<Button accessibilityLabel="Tap me to play a new game" onPress={() => this.props.navigation.navigate('Game')}>
					Ready t🎈 Play?
				</Button>
			</ImageBackground>
		);
	}
}

export default HomeScreen;

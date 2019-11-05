import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../GameBoard/styles';
import theme from '../../constants/theme';
import playBalloonPop from '../../constants/BalloonSound/BalloonSound';

export default class ModalText extends Component {
	state = {
		title: '',
		text: 'You Won! 🎉',
		navigate: ''
	};

	componentDidMount = () => {
		this.renderTexts();
	};

	navigate = async () => {
		await playBalloonPop();
		this.props.navigation.navigate(this.state.navigate);
	};

	renderTexts = () => {
		if (this.props.playerScore === 3 || this.props.computerScore === 3) {
			this.setState({
				title: 'End Game',
				navigate: 'Home'
			});
		} else {
			this.setState({
				title: 'Play Again',
				navigate: 'Game'
			});
		}

		if (this.props.incorrectLetters.length === 6) {
			this.setState({
				text: 'You Lost! 💥'
			});
		}
	};

	render() {
		return (
			<View>
				<Text style={{ ...styles.modalText, marginTop: 50, marginLeft: 50 }}>{this.state.text}</Text>
				<View style={styles.modalButton}>
					<Button
						title={this.state.title}
						style={styles.modalText}
						color={theme.secondaryColor}
						accessibilityLabel={this.state.title}
						onPress={this.navigate}
					>
						{this.state.title}
					</Button>
				</View>
			</View>
		);
	}
}

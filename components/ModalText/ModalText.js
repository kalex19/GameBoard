import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../GameBoard/styles';

export default class ModalText extends Component {
	render() {
		state = {
			title: '',
			text: 'You Won! 🎉'
		};

		componentDidMount = () => {
			this.renderTexts();
		};

		renderTexts = () => {
			if (this.props.playerScore === 3 || this.props.computerScore === 3) {
				this.setState({
					title: 'End Game'
				});
			} else {
				this.setState({
					title: 'Play Again'
				});
			}

			if (this.props.incorrectLetters.length === 6) {
				this.setState({
					text: 'You Lost! 💥'
				});
			}
		};

		return (
			<View>
				<Text style={{ marginTop: 100, marginLeft: 100, modalText }}>{this.state.text}</Text>
				<View style={styles.modalButton}>
					<Button
						title={this.state.title}
						color={theme.secondaryColor}
						style={styles.buttonText}
						accessibilityLabel={this.state.title}
						onPress={this.navigateHome}
					/>
				</View>
			</View>
		);
	}
}

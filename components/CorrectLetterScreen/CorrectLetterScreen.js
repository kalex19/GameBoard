import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CorrectLetter from '../../constants/CorrectLetter/CorrectLetter';
import { styles } from '../GameBoard/styles';

export default class CorrectLetterScreen extends Component {
	render() {
		if (this.props.chosenWord.length) {
			const chosenWordArray = this.props.chosenWord.split('');
			return chosenWordArray.map(letter => {
				const visibility = this.props.guesses.includes(letter);
				return <CorrectLetter visible={visibility} letter={letter} />;
			});
		} else {
			return (
				<View>
					<Text style={styles.text} accessibilityLabel="The chosen word is loading">
						Out of breath💨... one moment.
					</Text>
				</View>
			);
		}
	}
}

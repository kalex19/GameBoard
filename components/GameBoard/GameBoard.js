import React, { Component } from 'react';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { loadWords } from '../../actions';
import { getWords } from '../../utils/getWords';
import PropTypes from 'prop-types';
import Header from '../../constants/Header/Header';
import Score from '../../constants/Score/Score';

export class GameBoard extends Component {
	state = {
		words: [],
		chosenWord: '',
		guessedLetter: '',
		incorrectLetters: [],
		correctLetters: [],
		round: 0,
		computerScore: 0,
		playerScore: 0
	};

	componentDidMount = async () => {
		await this.fetchWords();
		this.pickWord()
	};

	fetchWords = async () => {
		const words = await getWords();
		this.setState({
			words
		});
		this.props.loadWords(words);
	};

	pickWord = () => {
		const randomIndex = Math.random() * 100
		const chosenWord = this.state.words[randomIndex]
		this.setState({
			chosenWord
		})
	}

	handleChange = (name, value) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		console.log(this.state.words);
	};

	render() {
		return (
			<View style={theme.container}>
				<View style={styles.containerFlex}>
					<Score player="You" score={this.state.playerScore} />
					<Header accessibilityLabel="Word guessing game called Wordpop" style={{ fontSize: 30 }}>
						WORDP🎈P
					</Header>
					<Score player="CPU" score={this.state.computerScore} />
				</View>
				<View>
					{/* for each incorrect letter in this.state.incorrectletter render incorrect letter conponent - have each letter component be positioned at random angles so letters are all twisted and add animation so they shake */}
				</View>
				{/* image of man holding 6 balloons and with a wrong letter guess, balloon flies off page or pops and then incorrect letter appears above, if all 6 balloons are gone show annoucement comp with lose text and add point to comp */}
				{/* for each letter in word show _ once letter is guessed correctly, show letter, if all letters are showing show announcement comp, add point, and change announcement text */}
				<View style={styles.containerFlex}>
					<TextInput
						accessibilityLabel="Type your guess here. A guess is one letter"
						placeholder="What's your guess?"
						style={styles.inputStyle}
						onChangeText={value => this.handleChange('guess', value)}
						value={this.state.guess}
						maxLength={1}
					/>
					<View style={styles.button}>
						<Button
							title="ENTER"
							color={theme.secondaryColor}
							style={styles.buttonText}
							accessibilityLabel="Tap me to submit your letter guess"
							onPress={this.handleSubmit}
						/>
					</View>
				</View>
				{/* if all baloons are hidden or all letters are showing, show popup with play again button (on press pick new random word, add back balloons, render new correct letter comp, clear all incorrect letter comp) 
					on pop up if all letters are showing say you won else say you lost aka Announcement component - need to account for inputs that are not letters */}
			</View>
		);
	}
}

export const mapStateToProps = state => ({
	words: state.words
});

export const mapDispatchToProps = dispatch => ({
	loadWords: words => dispatch(loadWords(words))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

GameBoard.propTypes = {
	words: PropTypes.array
};

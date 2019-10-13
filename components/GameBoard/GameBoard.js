import React, { Component } from 'react';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Text, View, Input } from 'react-native';
import { connect } from 'react-redux';
import { loadWords } from '../../actions';
import { getWords } from '../../utils/getWords';
import { PropTypes } from 'prop-types';
import Button from '../../constants/Button/Button';
import Header from '../../constants/Header/Header';

class GameBoard extends Component {
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
	};

	fetchWords = async () => {
		words = await getWords();
		this.setState({
			words
		});
		this.props.loadWords(words);
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<View style={theme.container}>
			<View style={styles.containerFlex}>
				<View style={styles.containerStacked}> 
					<Text>🎈You: {this.state.playerScore}</Text>
				</View>
					<Header accessibilityLabel="Word guessing game called Balloons" style={{ fontSize: 30 }}>
						BALLOONS
					</Header>
					<View style={styles.containerStacked}>
					<Text>Opponent: {this.state.computerScore}</Text>
					</View>
					{/* turn these into score components ^^^ */}
			</View>
				<View>
					{/* for each incorrect letter in this.state.incorrectletter render incorrect letter conponent - have each letter component be positioned at random angles so letters are all twisted and add animation so they shake */}
				</View>
				{/* image of man holding 6 balloons and with a wrong letter guess, balloon flies off page or pops and then incorrect letter appears above, if all 6 balloons are gone show annoucement comp with lose text and add point to comp */}
				{/* for each letter in word show _ once letter is guessed correctly, show letter, if all letters are showing show announcement comp, add point, and change announcement text */}
				<View style={styles.containerFlex}>
					<Input
						accessibilityLabel="Type your guess here. A guess is one letter"
						placeholder="Take a guess"
						style={styles.inputStyle}
						onChangeText={value => this.handleChange('guess', value)}
						value={this.state.guess}
					/>
					<Button accessibilityLabel="Tap me to submit your letter guess">Take a Guess</Button>
				</View>
				{/* if all baloons are hidden or all letters are showing, show popup with play again button (on press pick new random word, add back balloons, render new correct letter comp, clear all incorrect letter comp) 
					on pop up if all letters are showing say you won else say you lost aka Announcement component */}
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

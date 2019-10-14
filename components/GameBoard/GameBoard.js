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
		this.pickWord();
	};

	fetchWords = async () => {
		const words = await getWords();
		this.setState({
			words
		});
		this.props.loadWords(words);
	};

	pickWord = () => {
		const randomIndex = Math.random() * 100;
		const chosenWord = this.state.words[randomIndex];
		this.setState({
			chosenWord
		});
	};

	incorrectContainer = () => {
		if (incorrectLetters.length) {
			return incorrectLetters.map(letter => {
				return <IncorrectLetter letter={letter} />;
			});
		} else {
			return <Text style={styles.text}>Afraid of Loud Noises??</Text>;
		}
	};

	correctContainer = () => {
		if (chosenWord.length) {
			return chosenWord.forEach(letter => {
				return <correctLetter letter={letter} />;
			});
		} else {
			return <Text style={styles.text}>Running low on helium, one moment...</Text>;
		}
	};

	renderBalloons = () => {
		const balloons = [];
		for (let i = 0; i < 6 - this.state.incorrectLetters.length; i++) {
			balloons.push(<Text>🎈</Text>);
		}
		return <View>{balloons}</View>;
	};

	handleChange = (name, value) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		console.log(this.state.words);
		if (this.state.chosenWord.includes(this.state.guessedLetter)) {
			[...this.state.correctLetters, this.state.guessedLetter];
		} else {
			[...this.state.incorrectLetters, this.state.guessedLetter];
		}

			{/* image of man holding 6 balloons and with a wrong letter guess, balloon flies off page or pops and then incorrect letter appears above, if all 6 balloons are gone show annoucement comp with lose text and add point to comp */}
				{/* for each letter in word show _ once letter is guessed correctly, show letter, if all letters are showing show announcement comp, add point, and change announcement text */}
				{/* if all baloons are hidden or all letters are showing, show popup with play again button (on press pick new random word, add back balloons, render new correct letter comp, clear all incorrect letter comp) 
					on pop up if all letters are showing say you won else say you lost aka Announcement component - need to account for inputs that are not letters */}
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
				<View style={styles.incorrectLettersContainer}>{this.incorrectContainer()}</View>
				<View style={styles.balloonContainer} />
				{this.renderBalloons()}
				<Image source={require('../../assets/stickman.png')} />
				<View>{this.correctContainer()}</View>
				<View style={styles.containerFlex}>
					<TextInput
						accessibilityLabel="Type your guess here. A guess is one letter"
						placeholder="What's your guess?"
						style={styles.inputStyle}
						onChangeText={value => this.handleChange('guessedLetter', value)}
						value={this.state.guessedLetter}
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

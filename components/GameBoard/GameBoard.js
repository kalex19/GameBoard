import React, { Component } from 'react';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Text, View, TextInput, Button, Modal, Image } from 'react-native';
import { getWords } from '../../utils/getWords';
import PropTypes from 'prop-types';
import Header from '../../constants/Header/Header';
import Score from '../../constants/Score/Score';
import IncorrectLetter from '../../constants/IncorrectLetter/IncorrectLetter';
import CorrectLetter from '../../constants/CorrectLetter/CorrectLetter';

export class GameBoard extends Component {
	state = {
		words: [],
		chosenWord: '',
		currentGuess: '',
		guesses: [],
		round: 1,
		computerScore: 0,
		playerScore: 0,
		gameOver: false,
		error: ''
	};

	async componentDidMount() {
		await this.fetchWords();
		this.pickWord();
	}

	fetchWords = async () => {
		const wordString = await getWords();
		const words = wordString.split('\n');
		this.setState({ words });
	};

	pickWord = () => {
		const randomIndex = Math.floor(Math.random() * this.state.words.length);
		const chosenWord = this.state.words[randomIndex];
		console.log(chosenWord);
		this.setState({ chosenWord });
	};

	incorrectContainer = () => {
		const incorrectLetters = this.getIncorrectLetters();
		return incorrectLetters.map(letter => <IncorrectLetter letter={letter} />);
	};

	correctContainer = () => {
		const chosenWordArray = this.state.chosenWord.split('');
		return chosenWordArray.map(letter => {
			const visibility = this.state.guesses.includes(letter);
			return <CorrectLetter visible={visibility} letter={letter} />;
		});
	};

	renderBalloons = () => {
		const balloons = [];
		const incorrectLetters = this.getIncorrectLetters();
		for (let i = 0; i < 6 - incorrectLetters.length; i++) {
			balloons.push(<Text>🎈</Text>);
		}
		return <View style={styles.balloonContainer}>{balloons}</View>;
	};

	handleSubmit = () => {
		if (!/[a-z]+/i.test(this.state.currentGuess)) {
			this.setState({
				error: 'Please only use letters. No symbols or numbers.',
				guess: ''
			});
		} else if (this.state.currentGuess.length === 1) {
			this.handleLetterSubmit();
		} else {
			this.handleWordSubmit();
		}
	};

	handleLetterSubmit = () => {
		if (this.state.guesses.includes(this.state.currentGuess.toLowerCase())) {
			this.setState({
				error: 'Already guessed this letter. Please guess again.',
				currentGuess: ''
			});
		} else {
			this.setState(
				{
					error: '',
					guesses: [...this.state.guesses, this.state.currentGuess.toLowerCase()],
					currentGuess: ''
				},
				() => this.checkGameStatus()
			);
		}
	};

	handleWordSubmit = () => {
		if (this.state.currentGuess.toLowerCase() === this.state.chosenWord) {
			this.setState(
				{
					error: '',
					guesses: [...this.state.guesses, this.state.currentGuess.toLowerCase()],
					currentGuess: ''
				},
				() => this.checkGameStatus()
			);
		}
	};

	checkGameStatus = () => {
		const splitChosenWord = this.state.chosenWord.split('');
		const incorrectLetters = this.getIncorrectLetters();
		if(this.state.guesses.includes(this.state.chosenWord) || splitChosenWord.every(letter => this.state.guesses.includes(letter))) {
			this.setState({
				gameOver: true,
				playerScore: this.state.playerScore + 1
			});
		} else if (incorrectLetters.length === 6) {
			this.setState({
				computerScore: this.state.computerScore + 1,
				gameOver: true
			});
		}
	};

	setWinnerText = () => {
		const incorrectLetters = this.getIncorrectLetters();
		if (incorrectLetters.length === 6) {
			return 'You Lost!';
		}
		return 'You Won!';
	};

	resetGame = () => {
		this.pickWord();
		this.setState({
			guesses: [],
			gameOver: false,
			round: this.state.round + 1
		});
	};

	getIncorrectLetters = () => {
		const { guesses, chosenWord } = this.state;
		return guesses.filter(letter => !chosenWord.includes(letter));
	};

	render() {
		const incorrectLetters = this.getIncorrectLetters();
		const lettersToRender = incorrectLetters.length ? this.incorrectContainer() : <Text>Not enough helium</Text>;

		return (
			<View style={theme.container}>
				<View style={styles.containerFlex}>
					<Score player="You" score={this.state.playerScore} />
					<Header accessibilityLabel="Word guessing game called Wordpop" style={{ fontSize: 30 }}>
						WORDP🎈P
					</Header>
					<Text>{this.state.round}</Text>
					<Score player="CPU" score={this.state.computerScore} />
				</View>
				<View style={styles.incorrectLettersContainer}>{lettersToRender}</View>
				<View style={styles.balloonContainer}>{this.renderBalloons()}</View>
				<Image source={require('../../assets/stickman.png')} />
				<View style={styles.correctLettersContainer}>{this.correctContainer()}</View>
				<View style={styles.containerFlex}>
					<TextInput
						accessibilityLabel="Type your guess here. A guess is one letter"
						placeholder="What's your guess?"
						style={styles.inputStyle}
						onChangeText={value => this.setState({ currentGuess: value })}
						value={this.state.currentGuess}
						maxLength={this.state.chosenWord.length}
					/>
					<View style={styles.button}>
						<Button
							title="ENTER"
							color={theme.secondaryColor}
							style={styles.buttonText}
							accessibilityLabel="Tap me to submit your letter guess"
							onPress={this.handleSubmit}
						/>
						<Text style={styles.text}>{this.state.error}</Text>
					</View>
					<View style={{ marginTop: 22 }}>
						<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.gameOver}
							// onRequestClose={() => {
							// 	Alert.alert('Modal has been closed.');
							// }}
						>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text>{this.setWinnerText()}</Text>
									<View style={styles.button}>
										<Button
											title="Play Again"
											color={theme.secondaryColor}
											style={styles.buttonText}
											accessibilityLabel="Play a new game"
											onPress={this.resetGame}
										/>
									</View>
								</View>
							</View>
						</Modal>
					</View>
				</View>
			</View>
		);
	}
}

export default GameBoard;

GameBoard.propTypes = {
	words: PropTypes.array
};

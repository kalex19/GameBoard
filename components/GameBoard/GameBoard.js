import React, { Component } from 'react';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Text, View, TextInput, Button, Modal, Image, SafeAreaView } from 'react-native';
import { getWords } from '../../utils/getWords';
import PropTypes from 'prop-types';
import IncorrectLetter from '../../constants/IncorrectLetter/IncorrectLetter';
import { Avatar, Badge } from 'react-native-elements';
import BalloonScreen from '../BalloonScreen/BalloonScreen';
import CorrectLetterScreen from '../CorrectLetterScreen/CorrectLetterScreen';
import ModalText from '../ModalText/ModalText';

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
		error: '',
		hintButtonCount: 1,
		hintButtonVisibility: false
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
		const { words } = this.state;
		const randomIndex = Math.floor(Math.random() * words.length);
		const chosenWord = words[randomIndex];
		console.log(chosenWord);
		this.setState({ chosenWord });
	};

	getIncorrectLetters = () => {
		const { guesses, chosenWord } = this.state;
		return guesses.filter(letter => !chosenWord.includes(letter));
	};

	renderIncorrectLetters = () => {
		const incorrectLetters = this.getIncorrectLetters();
		return incorrectLetters.map(letter => <IncorrectLetter letter={letter} />);
	};

	handleSubmit = () => {
		if (!/[a-z]+/i.test(this.state.currentGuess)) {
			this.setState({
				error: 'Letters only. No symbols or numbers.',
				currentGuess: ''
			});
		} else if (this.state.currentGuess.length === 1) {
			this.handleLetterSubmit();
		} else {
			this.handleWordSubmit();
		}
	};

	handleLetterSubmit = () => {
		if (this.state.guesses.includes(this.state.currentGuess.toLowerCase())) {
			this.setError();
		} else {
			this.setCorrectState();
		}
	};

	handleWordSubmit = () => {
		if (this.state.currentGuess.toLowerCase() === this.state.chosenWord) {
			this.setCorrectState();
		} else {
			this.setError();
			this.setCorrectState();
		}
	};

	setError = () => {
		this.setState({
			error: 'Please guess again',
			correctGuess: ''
		});
	};

	setCorrectState = () => {
		this.setState(
			{
				error: '',
				guesses: [...this.state.guesses, this.state.currentGuess.toLowerCase()],
				currentGuess: ''
			},
			() => this.checkGameStatus()
		);
	};

	checkGameStatus = () => {
		const splitChosenWord = this.state.chosenWord.split('');
		const incorrectLetters = this.getIncorrectLetters();
		if (
			this.state.guesses.includes(this.state.chosenWord) ||
			splitChosenWord.every(letter => this.state.guesses.includes(letter))
		) {
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

	revealHint = () => {
		let revealedLetter = '';
		const chosenWordArray = this.state.chosenWord.split('');
		const unguessedLetters = chosenWordArray
			.filter(letter => {
				return !this.state.guesses.includes(letter);
			})
			.sort();
		for (let i = 0; i <= unguessedLetters.length; i++) {
			let currentLetter = unguessedLetters[i];
			let letterOccurance = unguessedLetters.filter(letter => letter === currentLetter);
			if (letterOccurance.length <= 1) {
				revealedLetter = currentLetter;
				this.setState({
					hintButtonCount: this.state.hintButtonCount + 1,
					guesses: [...this.state.guesses, revealedLetter]
				});
				break;
			}
			if (letterOccurance.length > 1) {
				revealedLetter = '';
				this.setState({
					error: 'No More Hints'
				});
			}
		}
		if (this.state.hintButtonCount >= 2) {
			this.setState({
				hintButtonVisibility: !this.state.hintButtonVisibility
			});
		}
	};

	resetGame = () => {
		this.pickWord();
		this.setState({
			guesses: [],
			gameOver: false,
			round: this.state.round + 1
		});
	};

	render() {
		const incorrectLetters = this.getIncorrectLetters();
		const lettersToRender = incorrectLetters.length ? (
			this.renderIncorrectLetters()
		) : (
			<Text style={styles.text}>No Guesses Yet! </Text>
		);
		const lettersLength = 6 - incorrectLetters.length;

		return (
			<SafeAreaView style={theme.container}>
				<View style={styles.containerFlex}>
					<View>
						<Avatar rounded source={require('../../assets/valerie-elash-JQDflNNnrEE-unsplash.jpg')} size="large" />
						<Badge
							status="error"
							value={this.state.playerScore}
							containerStyle={{ position: 'absolute', top: -1, right: -1 }}
						/>
					</View>
					<View style={styles.columnContainer}>
						<Text accessibilityLabel="Word guessing game called Wordpop" style={styles.header}>
							WORDP🎈P
						</Text>
						<Text style={styles.text} accessibilityLabel="Current game round">
							Round {this.state.round}
						</Text>
					</View>
					<View>
						<Avatar rounded source={require('../../assets/kari-shea-1SAnrIxw5OY-unsplash.jpg')} size="large" />
						<Badge
							status="error"
							value={this.state.computerScore}
							containerStyle={{ position: 'absolute', top: -1, right: -1 }}
						/>
					</View>
				</View>
				<View style={styles.incorrectLettersContainer}>{lettersToRender}</View>
				<BalloonScreen lettersLength={lettersLength} />
				<Image source={require('../../assets/stickmanninja.png')} />
				<View style={styles.correctLettersContainer}>
					<CorrectLetterScreen guesses={this.state.guesses} chosenWord={this.state.chosenWord} />
				</View>
				<Text style={styles.text}>{this.state.error}</Text>
				<View style={styles.containerFlex}>
					{this.state.chosenWord.length > 0 && (
						<View style={{ flexDirection: 'column', alignItems: 'center' }}>
							<TextInput
								accessibilityLabel="Type your guess here. A guess is one letter or the whole word"
								placeholder="What's your guess?"
								style={styles.inputStyle}
								onChangeText={value => this.setState({ currentGuess: value })}
								value={this.state.currentGuess}
								maxLength={this.state.chosenWord.length}
							/>
							<View style={{ flexDirection: 'row' }}>
								<View style={styles.button}>
									<Button
										title="ENTER"
										color={theme.secondaryColor}
										style={styles.buttonText}
										accessibilityLabel="Tap me to submit your guess"
										onPress={this.handleSubmit}
									/>
								</View>
								<View style={styles.button}>
									<Button
										color={theme.secondaryColor}
										style={styles.buttonText}
										disabled={this.state.hintButtonVisibility}
										title="HINT"
										accessibilityLabel="Tap me to get a hint"
										onPress={this.revealHint}
									>
										HINT
									</Button>
								</View>
							</View>
						</View>
					)}
					<View style={styles.modalContainer}>
						<Modal animationType="fade" transparent={false} visible={this.state.gameOver}>
							<ModalText
								playerScore={this.state.playerScore}
								computerScore={this.state.computerScore}
								incorrectLetters={incorrectLetters}
							/>
						</Modal>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

export default GameBoard;

GameBoard.propTypes = {
	words: PropTypes.array
};

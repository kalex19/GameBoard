import React, { Component } from 'react';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Text, View, TextInput, Button, Modal, Image, SafeAreaView } from 'react-native';
import { getWords } from '../../utils/getWords';
import PropTypes from 'prop-types';
import Score from '../../constants/Score/Score';
import IncorrectLetter from '../../constants/IncorrectLetter/IncorrectLetter';
import CorrectLetter from '../../constants/CorrectLetter/CorrectLetter';
import { Audio } from 'expo-av';

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
			balloons.push(
				<Text style={{ fontSize: 20 }} key={i}>
					🎈
				</Text>
			);
		}
		return (
			<View style={styles.balloonContainer}>
				<Text style={{ ...styles.text, marginBottom: 10 }}>Balloons Left</Text>
				<View style={{ flexDirection: 'row' }}>{balloons}</View>
			</View>
		);
	};

	playBalloonPop = async () => {
		const soundObject = new Audio.Sound();

		try {
			await soundObject.loadAsync(require('../../assets/Pop.m4a'));
			await soundObject.playAsync();
		} catch (error) {
			console.log('oops');
		}
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
			this.setState({
				error: 'Please guess again.',
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

	setWinnerText = () => {
		const incorrectLetters = this.getIncorrectLetters();
		if (incorrectLetters.length === 6) {
			return <Text style={styles.modalText}>You Lost! 💥</Text>;
		}
		return <Text style={styles.modalText}>You Won! 🎉</Text>;
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

	navigateHome = async () => {
		await this.playBalloonPop();
		this.props.navigation.navigate('Home');
	};

	renderButton = () => {
		if (this.state.playerScore === 3 || this.state.computerScore === 3) {
			return (
				<Button
					title="End Game"
					color={theme.secondaryColor}
					style={styles.buttonText}
					accessibilityLabel="End the game"
					onPress={this.navigateHome}
				/>
			);
		}
		return (
			<Button
				title="Play Again"
				color={theme.secondaryColor}
				style={styles.buttonText}
				accessibilityLabel="Play a new game"
				onPress={this.resetGame}
			/>
		);
	};

	render() {
		const incorrectLetters = this.getIncorrectLetters();
		const lettersToRender = incorrectLetters.length ? (
			this.incorrectContainer()
		) : (
			<Text style={styles.text}>No Guesses Yet! </Text>
		);

		return (
			<SafeAreaView style={theme.container}>
				<View style={styles.containerFlex}>
					<Score player="You" score={this.state.playerScore} />
					<View style={styles.columnContainer}>
						<Text accessibilityLabel="Word guessing game called Wordpop" style={styles.header}>
							WORDP🎈P
						</Text>
						<Text style={styles.text}>Round {this.state.round}</Text>
					</View>
					<Score player="CPU" score={this.state.computerScore} />
				</View>

				<View style={styles.incorrectLettersContainer}>{lettersToRender}</View>
				<View style={styles.balloonContainer}>{this.renderBalloons()}</View>
				<Image source={require('../../assets/stickmanninja.png')} />
				<View style={styles.correctLettersContainer}>{this.correctContainer()}</View>
				<Text style={styles.text}>{this.state.error}</Text>
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
					</View>
					<View style={styles.modalContainer}>
						<Modal animationType="fade" transparent={false} visible={this.state.gameOver}>
							<View>
								<Text style={{ marginTop: 100, marginLeft: 100 }}>{this.setWinnerText()}</Text>
								<View style={styles.modalButton}>{this.renderButton()}</View>
							</View>
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

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
		guessedLetter: '',
		incorrectLetters: [],
		correctLetters: [],
		round: 0,
		computerScore: 0,
		playerScore: 0,
		modalVisible: false,
		winner: 'lost',
		error: '',
		letterVisible: false
	};

	async componentDidMount() {
		await this.fetchWords();
		this.pickWord();
	}

	fetchWords = async () => {
		const words = await getWords();
		// convert from one string to array
		this.setState({ words });
	};

	pickWord = () => {
		const randomIndex = Math.floor(Math.random() * this.state.words.length);
		const chosenWord = this.state.words[randomIndex];
		this.setState({ chosenWord });
	};

	incorrectContainer = () => {
		return incorrectLetters.map(letter => <IncorrectLetter letter={letter} />);
	};

	correctContainer = () => {
		const chosenWordArray = this.state.chosenWord.split('');
		return chosenWordArray.map(letter => {
			const visibility = chosenWordArray.includes(letter);
			return <CorrectLetter visible={visibility} letter={letter} />;
		});
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
		if (!/[a-z]/i.test(this.state.guess)) {
			this.setState({
				error: 'Please only use letters. No symbols or numbers'
			});
		} else {
			this.setState({
				error: ''
			});
		}
		if (this.state.chosenWord.includes(this.state.guessedLetter)) {
			this.setState({
				correctLetters: [...this.state.correctLetters, this.state.guessedLetter]
			});
		} else {
			this.setState({
				incorrectLetters: [...this.state.incorrectLetters, this.state.guessedLetter]
			});
		}
		// array.every
		if (this.state.correctLetters.join(',').inlcudes(this.state.chosenWord)) {
			this.setState({
				winner: 'won',
				modalVisible: true,
				playerScore: playerScore + 1
			});
		}
		if (this.state.incorrectLetters.length === 6) {
			this.setState({
				computerScore: computerScore + 1,
				modalVisible: true
			});
		}
	};

	resetGame = () => {
		this.pickWord();
		this.setState({
			incorrectLetters: [],
			correctLetters: [],
			modalVisible: false,
			round: this.state.round + 1
		});
	};

	render() {
		const { incorrectLetters } = this.state;
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
						<Text style={styles.text}>{this.state.error}</Text>
					</View>
					<View style={{ marginTop: 22 }}>
						<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.modalVisible}
							// onRequestClose={() => {
							// 	Alert.alert('Modal has been closed.');
							// }}
						>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text>You {this.state.winner}!</Text>
									{/* change to t/f and cr */}
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

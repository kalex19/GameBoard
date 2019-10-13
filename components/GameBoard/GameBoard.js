import React, { Component } from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loadWords } from '../../actions';
import { getWords } from '../../Utils/getWords';
import { PropTypes } from 'prop-types';
import Button from '../common/Button/Button';

export class GameBoard extends Component {
	state = {
		words: []
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

	render() {
		return (
			<View style={styles.container}>
				<Text accessibilityLabel="Word guessing game called Hangman">Hangman</Text>
				{/* score human
					score computer *Score */}
				{/* conditionally show "You won/lost!" *Announcement*/}
				{/* balloons with wrong guessed letter in them *IncorrectLetter
					<Image source={require('../../assets/hangman.jpeg')} style={styles.logo} /> image of man with balloons and each one goes away with wrong guess
					- - - - - - with letters filled in *CorrectLetter
					<Input>A</Input> */}
				<Button accessibilityLabel="Tap me to submit your letter guess">Take a Guess</Button>
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

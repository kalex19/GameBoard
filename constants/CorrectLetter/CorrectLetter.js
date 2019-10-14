import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const CorrectLetter = props => {
	return (
		<View style={styles.container}>
			<Text style={{ ...styles.letter }}>{props.letter}</Text>
		</View>
	);
};

export default CorrectLetter;
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const CorrectLetter = props => {
	return (
		<View style={styles.correctContainer}>
			<Text style={{ ...styles.letter, ...props.visible }}>{props.visible ? props.letter : '*'}</Text>
		</View>
	);
};

export default CorrectLetter;

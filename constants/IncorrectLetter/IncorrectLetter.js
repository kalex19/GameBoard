import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const IncorrectLetter = props => {
	return (
		<View style={styles.container}>
			<Text accessibilityLabel={props.accessibilityLabel} style={styles.letter}>{props.letter}</Text>
		</View>
	);
};

export default IncorrectLetter;

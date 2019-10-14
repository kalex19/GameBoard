import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const CorrectLetter = props => {
	return (
		<View style={styles.correctContainer} >
			{/* if props.visible render letter else square w/ bottom border */}
			<Text style={{ ...styles.letter, ...props.visible }}>{props.letter}</Text>
		</View>
	);
};

export default CorrectLetter;
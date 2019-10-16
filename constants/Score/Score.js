import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Score = props => {
	return (
		<View style={styles.containerStacked}>
			<Text accessibilityLabel={props.accessibilityLabel} style={{ ...styles.text, ...props.style }}>
				{props.player}
			</Text>
			<Text accessibilityLabel={props.accessibilityLabel} style={{ ...styles.score, ...props.style }}>
				{props.score}
			</Text>
		</View>
	);
};

export default Score;

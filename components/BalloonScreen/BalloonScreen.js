import React from 'react';
import { View, Text } from 'react-native';
import Balloon from '../../constants/Balloon/Balloon';
import { styles } from '../../components/GameBoard/styles';

const BalloonScreen = props => {
	const balloons = [];
	for (let i = 0; i < props.lettersLength; i++) {
		balloons.push(<Balloon key={i} />);
	}
	return (
		<View style={styles.balloonContainer}>
			<Text
				style={{ ...styles.text, marginBottom: 10 }}
				accessibilityLabel="Number of guesses left before the end of the round"
			>
				Balloons Left
			</Text>
			<View style={{ flexDirection: 'row' }}>{balloons}</View>
		</View>
	);
};

export default BalloonScreen;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../components/GameBoard/styles';

const LoaderHOC = WrappedComponent => {
	return class LoaderHOC extends Component {
		render() {
			return !this.props.chosenWord.length ? (
				<View>
					<Text style={styles.text} accessibilityLabel="The chosen word is loading">
						Out of breath💨... one moment.
					</Text>
				</View>
			) : (
				<WrappedComponent {...this.props} />
			);
		}
	};
};

export default LoaderHOC;

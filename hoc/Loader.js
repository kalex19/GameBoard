import React, { Component } from 'react';
import { View, Text } from 'react';
import { styles } from '../components/GameBoard/styles';

export const Loader = WrappedComponent => {
	return props => {
		return props.chosenWord.length ? (
			<WrappedComponent {...this.props} />
		) : (
			<View>
				<Text style={styles.text} accessibilityLabel="The chosen word is loading">
					Out of breath💨... one moment.
				</Text>
			</View>
		);
	};
};

export default Loader;

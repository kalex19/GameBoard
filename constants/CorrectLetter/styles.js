import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		margin: 5,
		borderBottomColor: 'red',
		borderBottomWidth: 5
	},
	letter: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 20,
		display: 'hidden'
	}
});

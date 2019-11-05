import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		margin: 10
	},
	letter: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 20
	}
});

import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		marginBottom: 20
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 45,
		textDecorationLine: 'underline',
		textDecorationColor: 'red'
	}
});

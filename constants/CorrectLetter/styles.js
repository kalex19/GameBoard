import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	letter: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 20
	},
	correctContainer: {
		borderBottomColor: theme.tertiaryColor,
		borderBottomWidth: 2,
		width: '5%',
		padding: 0,
		margin: 2
	}
});

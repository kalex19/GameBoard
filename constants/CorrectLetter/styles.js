import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	letter: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 25
	},
	correctContainer: {
		borderBottomColor: theme.tertiaryColor,
		borderBottomWidth: 2,
		width: '5%',
		margin: 2,
		height: '50%',
		marginTop: 40
	}
});

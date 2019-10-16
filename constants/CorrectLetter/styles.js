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
		margin: 2,
		borderBottomColor: 'red',
		borderBottomWidth: 5,
		width: '5%'
	}
});

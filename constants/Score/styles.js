import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	containerStacked: {
		marginBottom: 20,
		flex: 1,
		flexDirection: 'column'
	},
	text: {
		textAlign: 'center',
		fontFamily: theme.secondaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 20,
	},
	score: {
		textAlign: 'center',
		fontFamily: theme.secondaryFont,
		color: 'red',
		fontSize: 20,
	}
});

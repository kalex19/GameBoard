import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	containerStacked: {
		marginTop: 15,
		flex: 1,
		flexDirection: 'column'
	},
	text: {
		textAlign: 'center',
		fontFamily: theme.secondaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 20
	},
	score: {
		textAlign: 'center',
		fontFamily: theme.secondaryFont,
		color: theme.tertiaryColor,
		fontSize: 30
	}
});

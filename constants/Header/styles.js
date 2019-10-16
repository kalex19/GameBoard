import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		marginBottom: 200,
		marginTop: 200,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 100
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 55,
		textDecorationLine: 'underline',
		textDecorationColor: theme.tertiaryColor
	}
});

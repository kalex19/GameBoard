import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		marginBottom: 200,
		marginTop: 220,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 100,
		width: '85%',
		alignSelf: 'center'
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 50,
		textDecorationLine: 'underline',
		textDecorationColor: theme.tertiaryColor
	}
});

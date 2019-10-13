import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		width: '100%'
	},
	button: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: 70,
		justifyContent: 'center',
		margin: 10,
		width: '75%'
	},
	buttonText: {
		color: theme.secondaryColor,
		fontFamily: theme.secondaryFont,
		fontSize: 30
	}
});

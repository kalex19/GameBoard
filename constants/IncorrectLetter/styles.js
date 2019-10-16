import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
	container: {
		margin: 5
	},
	letter: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 20
		// transform: [{ rotateX: '15deg' }, { translateX: '0' }, {translateY: '0'}], animate letters
	}
});

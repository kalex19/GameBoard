import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	text: {
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 30,
		alignSelf: 'center',
		flex: 2
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null
	}
});

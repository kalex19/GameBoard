import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	header: {
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 60,
		marginBottom: 200,
		marginTop: 200,
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null
	}
});

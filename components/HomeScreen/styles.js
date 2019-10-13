import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	logo: {
		width: '40%',
		height: '40%'
	},
	text: {
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontSize: 30,
		alignSelf: 'center'
	}
});

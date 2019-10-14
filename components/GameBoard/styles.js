import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	containerFlex: {
		flex: 1,
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		marginTop: 20
	},
	inputStyle: {
		width: '60%',
		height: '20%',
		backgroundColor: theme.secondaryColor,
		borderColor: theme.primaryColor,
		borderWidth: 5,
		color: theme.primaryColor,
		fontSize: 20,
		paddingLeft: 5
	},
	button: {
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: '20%',
		margin: 5,
		justifyContent: 'flex-end',
		width: '30%'
	},
	buttonText: {
		fontFamily: theme.secondaryFont,
		fontSize: 30
	}
});

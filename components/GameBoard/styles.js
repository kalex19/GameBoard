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
		width: '50%',
		height: '20%',
		backgroundColor: theme.secondaryColor,
		borderColor: theme.primaryColor,
		borderWidth: 5,
		color: theme.primaryColor,
		fontSize: 20
	},
	button: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: '20%',
		justifyContent: 'center',
		margin: 10,
		width: '30%'
	},
	buttonText: {
		color: theme.secondaryColor,
		fontFamily: theme.secondaryFont,
		fontSize: 20
	}
});

import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	containerFlex: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'row',
		margin: 10
	},
	columnContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		flexDirection: 'column'
	},
	header: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
		color: theme.primaryColor,
		fontWeight: '900',
		fontSize: 30,
		textDecorationLine: 'underline',
		textDecorationColor: theme.tertiaryColor
	},
	incorrectLettersContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		height: '50%',
		width: '80%',
		borderColor: theme.tertiaryColor,
		borderWidth: 1,
		margin: 5
	},
	balloonContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		width: '50%',
		height: '30%',
		marginLeft: 25,
		margin: 5
	},
	correctLettersContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		height: 20
	},
	inputStyle: {
		width: '80%',
		backgroundColor: theme.secondaryColor,
		borderColor: theme.primaryColor,
		borderWidth: 1,
		color: theme.primaryColor,
		fontSize: 20,
		margin: '2%',
		flex: 1,
		paddingLeft: 15,
		justifyContent: 'center'
	},
	button: {
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: '60%',
		margin: '1%',
		justifyContent: 'center',
		width: '40%'
	},
	buttonText: {
		fontFamily: theme.secondaryFont,
		fontSize: 15,
		alignSelf: 'center'
	},
	text: {
		color: theme.primaryColor,
		fontSize: 20,
		alignSelf: 'center',
		margin: 1
	},
	modalText: {
		color: theme.primaryColor,
		fontSize: 40,
		alignSelf: 'center',
		width: '50%'
	},
	modalButton: {
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: '20%',
		justifyContent: 'center',
		alignSelf: 'center',
		width: '60%',
		marginTop: 50
	}
});

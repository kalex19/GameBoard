import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	containerFlex: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'row',
		margin: 20
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
		fontSize: 20,
		textDecorationLine: 'underline',
		textDecorationColor: theme.tertiaryColor
	},
	incorrectLettersContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		height: 10,
		width: '80%',
		borderColor: theme.tertiaryColor,
		borderWidth: 1,
		margin: 5
	},
	balloonContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		width: '60%',
		height: '30%',
		marginLeft: 30,
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
		width: '55%',
		height: '60%',
		backgroundColor: theme.secondaryColor,
		borderColor: theme.primaryColor,
		borderWidth: 1,
		color: theme.primaryColor,
		fontSize: 20,
		margin: 5,
		flex: 1,
		paddingLeft: 15,
		justifyContent: 'center'
	},
	button: {
		backgroundColor: theme.primaryColor,
		borderRadius: 100,
		height: '60%',
		margin: 5,
		justifyContent: 'center',
		width: '30%'
	},
	buttonText: {
		fontFamily: theme.secondaryFont,
		fontSize: 20,
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

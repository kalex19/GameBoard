import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
	container: {
		borderBottomColor: 'maroon',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginBottom: 10
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.primaryFont,
    color: theme.primaryColor,
    fontWeight: '900',
    fontSize: 60,
    marginBottom: 200,
    marginTop: 200,
  },
});
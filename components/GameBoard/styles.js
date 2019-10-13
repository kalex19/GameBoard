import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
	inputStyle: {
		width: '50%',
		height: '10%',
		backgroundColor: theme.primaryColor,
		color: theme.secondaryColor,
		fontSize: 20
	},
	containerFlex: {
		flex: 1,
		justifyContent: 'space-evenly'
  },
  containerStacked: {
    width: '10%',
    flex: 2
  }
});

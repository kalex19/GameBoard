import React from 'react';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen/HomeScreen';
import GameBoard from './components/GameBoard/GameBoard';

export const store = createStore(rootReducer);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		GameBoard: {
			screen: GameBoard
		}
	},
	{
		initialRouteName: 'HomeScreen'
	}
);

const Navigator = createAppContainer(AppNavigator);

export default App;

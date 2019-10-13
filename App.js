import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
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
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		Game: {
			screen: GameBoard
		}
	},
	{
		initialRouteName: 'Game'
	}
);

const Navigator = createAppContainer(AppNavigator);

export default App;

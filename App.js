import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen/HomeScreen';
import GameBoard from './components/GameBoard/GameBoard';

class App extends Component {
	render() {
		return <Navigator />;
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
		initialRouteName: 'Home'
	}
);

const Navigator = createAppContainer(AppNavigator);

export default App;

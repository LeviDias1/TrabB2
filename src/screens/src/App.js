import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import MoviesScreen from './screens/MoviesScreen';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Movies: { screen: MoviesScreen },
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;

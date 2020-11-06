import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import { ListProvider } from './src/context/ListContext';

const navigator = createStackNavigator({
  Home: HomeScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Infinite Scroll',
  },
});

const App = createAppContainer(navigator);

export default () => {
  return <ListProvider>
    <App />
  </ListProvider>;
} 
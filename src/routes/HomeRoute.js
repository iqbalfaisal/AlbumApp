import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ViewerScreen from '../screens/ViewerScreen';

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen"
      headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ViewerScreen" component={ViewerScreen} />
    </Stack.Navigator>
  );
}

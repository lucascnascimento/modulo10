import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

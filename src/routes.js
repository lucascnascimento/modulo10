import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default (isSigned = false) => {
  function Dash() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Dashboard" component={Dashboard} />
      </BottomTab.Navigator>
    );
  }

  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isSigned ? (
          <Stack.Screen name="Dashboard" component={Dash} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

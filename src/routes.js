import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from '~/navigations/AuthNavigator';
import BottomTabNavigator from '~/navigations/BottomTabNavigator';

const Stack = createStackNavigator();

export default (isSigned = false) => {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isSigned ? (
          <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// TODO: Consertar as screens e as rotas
